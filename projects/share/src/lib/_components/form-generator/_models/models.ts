import { SelectComponent } from '../_components/select/select.component';
import { InputComponent } from '../_components/input/input.component';
import { InjectionToken } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

export interface DynamicFormInterface {
  controls: DynamicControlInterface[];
}

export interface DynamicControlInterface {
  name: string;
  controlType: ControlType;
  type?: DynamicControlType;
  label: string;
  value: any;
  controls?: DynamicFormInterface;
  validators?: ValidatorsControl;
  controlClass?: string | string[];
}

export type ValidatorsControl = {
  [key in DynamicControlsValidatorsKey]?: unknown;
};
export type DynamicControlType = 'string' | 'number';
export type CustomValidators = { banWord: ValidatorFn };
export type DynamicControlsValidatorsKey = keyof Omit<
  typeof Validators & CustomValidators,
  'compose' | 'composeAsync' | 'prototype'
>;
export type ControlType = 'input' | 'select' | 'group';
export type ControlComponent = SelectComponent | InputComponent;
export type ControlComponentMapper = { [key in ControlType]: any };

export interface DataInjectorInterface {
  controlKey: string;
  config: DynamicControlInterface;
}

export const DATA_INJECTOR = new InjectionToken<DataInjectorInterface>(
  'DATA_INJECTOR',
);
