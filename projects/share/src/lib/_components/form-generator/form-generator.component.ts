import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  DynamicControlInterface,
  DynamicFormInterface,
} from './_models/models';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgClass, NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { ResolveControlComponentService } from './_services/resolve-control-component.service';
import { DataInjectorPipe } from './_pipes/data-injector.pipe';
import { ErrorHandlerComponent } from './_components/error-handler/error-handler.component';
import { LabelComponent } from './_components/label/label.component';

@Component({
  selector: 'lib-form-generator',
  imports: [
    NgComponentOutlet,
    NgFor,
    NgIf,
    DataInjectorPipe,
    ReactiveFormsModule,
    ErrorHandlerComponent,
    NgClass,
    LabelComponent,
  ],
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.css',
  standalone: true,
})
export class FormGeneratorComponent {
  constructor(
    protected resolveControlComponentService: ResolveControlComponentService,
  ) {}

  form: FormGroup = new FormGroup({});
  @Output() formReady = new EventEmitter<FormGroup>();

  private _config!: DynamicFormInterface;
  @Input() set config(config: DynamicFormInterface) {
    this._config = config;
    this.buildControl(config, this.form);
    this.formReady.emit(this.form);
  }

  get config() {
    return this._config;
  }

  private buildControl(
    { controls }: DynamicFormInterface,
    formGroup: FormGroup,
  ) {
    controls &&
      controls.forEach((control) => {
        const validators = this.resolveValidators(control);
        if (control.controlType === 'group') {
          if (control.controls) {
            this.buildFormGroup(control.controls);
          }
        }
        formGroup.addControl(control.name, new FormControl(null, validators));
      });
  }

  private buildFormGroup(config: DynamicFormInterface) {
    if (!config.controls) return;
    config.controls.forEach((control: DynamicControlInterface) => {
      const nestedFormGroup = new FormGroup({});
      this.buildControl(config, nestedFormGroup);
    });
  }

  private resolveValidators({
    validators,
  }: DynamicControlInterface): ValidatorFn[] {
    if (validators) {
      return Object.keys(validators as Array<keyof typeof Validators>).map(
        (validatorKey) => {
          if (validatorKey === 'required') {
            return Validators.required;
          }
          return Validators.nullValidator;
        },
      );
    } else {
      return [];
    }
  }
}
