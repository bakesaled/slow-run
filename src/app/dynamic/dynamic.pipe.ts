import { Pipe, PipeTransform, NgModule, Injector, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DynamicPipeObj {
  value?: any;
  pipe: any;
  args?: any;
}

@Pipe({
  name: 'dynamicPipe',
})
export class DynamicPipe implements PipeTransform {
  constructor(private injector: Injector) {}

  transform(value: unknown, requiredPipe: Type<any>, args: any): unknown {
    const injector = Injector.create({
      name: 'DynamicPipe',
      parent: this.injector,
      providers: [{ provide: requiredPipe }],
    });
    const pipe = injector.get(requiredPipe);
    return pipe.transform(value, args);
  }
}

@NgModule({
  declarations: [DynamicPipe],
  imports: [CommonModule],
  exports: [DynamicPipe],
})
export class DynamicPipeModule {}
