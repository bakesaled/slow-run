import { DynamicPipe } from './dynamic.pipe';
import { Injector } from '@angular/core';

describe('DynamicPipe', () => {
  it('create an instance', () => {
    const pipe = new DynamicPipe({} as Injector);
    expect(pipe).toBeTruthy();
  });
});
