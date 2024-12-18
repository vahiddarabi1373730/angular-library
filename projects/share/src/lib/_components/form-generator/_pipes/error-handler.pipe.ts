import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorHandler',
  standalone: true,
})
export class ErrorHandlerPipe implements PipeTransform {
  transform(errorKey: string): string {
    switch (errorKey) {
      case 'required':
        return 'این فیلد اجباری است';
      default:
        return '';
    }
  }
}
