import { Component, input } from '@angular/core';
import { DynamicControlInterface } from '../../_models/models';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-label',
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
  standalone: true,
})
export class LabelComponent {
  control = input.required<DynamicControlInterface>();
  formGroup = input.required<FormGroup>();
}
