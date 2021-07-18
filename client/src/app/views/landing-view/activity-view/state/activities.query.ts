import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ActivitiesStore, ActivitiesState } from './activities.store';

@Injectable({ providedIn: 'root' })
export class ActivitiesQuery extends QueryEntity<ActivitiesState> {

  constructor(protected store: ActivitiesStore) {
    super(store);
  }

}
