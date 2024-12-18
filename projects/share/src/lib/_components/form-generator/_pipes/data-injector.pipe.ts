import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import {
  DATA_INJECTOR,
  DataInjectorInterface,
  DynamicControlInterface,
} from '../_models/models';

@Pipe({
  name: 'dataInjector',
  standalone: true,
})
export class DataInjectorPipe implements PipeTransform {
  public injector = inject(Injector);

  transform(controlKey: string, config: DynamicControlInterface): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: DATA_INJECTOR,
          useFactory: (): DataInjectorInterface => {
            return { config, controlKey };
          },
        },
      ],
    });
  }
}
