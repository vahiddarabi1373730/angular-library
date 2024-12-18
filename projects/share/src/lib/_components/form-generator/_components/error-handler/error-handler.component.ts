import { Component, input } from '@angular/core';
import { KeyValuePipe, NgFor } from '@angular/common';
import { ErrorHandlerPipe } from '../../_pipes/error-handler.pipe';
import { ValidatorsControl } from '../../_models/models';

@Component({
  selector: 'lib-error-handler',
  imports: [NgFor, KeyValuePipe, ErrorHandlerPipe],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css',
  standalone: true,
})
export class ErrorHandlerComponent {
  errors = input.required<ValidatorsControl | null>();
}
