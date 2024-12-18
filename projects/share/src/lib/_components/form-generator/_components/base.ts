import { Component, Directive, inject } from '@angular/core';
import { DATA_INJECTOR } from '../_models/models';
import { ControlContainer, FormGroup } from '@angular/forms';

@Directive()
export class BaseDynamicControl {
  protected config = inject(DATA_INJECTOR);
  protected parentFormGroup = inject(ControlContainer);

  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }
}
