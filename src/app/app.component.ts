import { AfterViewInit, Component } from '@angular/core';
import { DynamicFormInterface, FormGeneratorComponent } from 'share';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormGeneratorComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent implements AfterViewInit {
  protected form!: FormGroup;
  config: DynamicFormInterface = {
    controls: [
      {
        controlType: 'input',
        type: 'number',
        value: 123,
        label: 'نام',
        name: 'name',
        validators: { required: true },
      },
    ],
  };

  onReady(form: FormGroup) {
    this.form = form;
  }

  ngAfterViewInit() {
    this.form.controls['name'].valueChanges.subscribe((value) => {
      console.log(value, typeof value);
    });
  }
}
