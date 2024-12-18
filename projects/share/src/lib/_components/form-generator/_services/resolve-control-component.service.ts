import { Injectable } from '@angular/core';
import {
  ControlComponent,
  ControlComponentMapper,
  ControlType,
} from '../_models/models';
import { InputComponent } from '../_components/input/input.component';
import { SelectComponent } from '../_components/select/select.component';
import { GroupComponent } from '../_components/group/group.component';

@Injectable({
  providedIn: 'root',
})
export class ResolveControlComponentService {
  private controlComponent: ControlComponentMapper = {
    input: InputComponent,
    select: SelectComponent,
    group: GroupComponent,
  };

  resolve(controlType: ControlType) {
    return this.controlComponent[controlType];
  }
}
