import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Activity } from './activity.model';

export interface ActivitiesState extends EntityState<Activity> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'activities' })
export class ActivitiesStore extends EntityStore<ActivitiesState> {

  constructor() {
    super();
  }

}
