import { Injectable } from '@angular/core';
import {
  NgEntityService,
  NgEntityServiceConfig,
} from '@datorama/akita-ng-entity-service';
import { ActivitiesStore, ActivitiesState } from './activities.store';

@NgEntityServiceConfig({
  resourceName: 'activities',
  // baseUrl: 'customBaseUrl'
})
@Injectable({ providedIn: 'root' })
export class ActivitiesService extends NgEntityService<ActivitiesState> {
  constructor(protected store: ActivitiesStore) {
    super(store);
  }
}
