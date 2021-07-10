import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const METERS_PER_KM = 1000;

@Pipe({
  name: 'distance',
})
export class DistancePipe implements PipeTransform {
  transform(
    value: number,
    displayUnits: 'kilometers' | 'miles' = 'kilometers'
  ): string {
    if (displayUnits === 'kilometers') {
      const kms = value / METERS_PER_KM;
      return `${kms.toFixed(2)} km`;
    }
    return 'unknown';
  }
}

@NgModule({
  declarations: [DistancePipe],
  imports: [CommonModule],
  exports: [DistancePipe],
})
export class DistancePipeModule {}
