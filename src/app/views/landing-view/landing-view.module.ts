import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingViewRoutingModule } from './landing-view-routing.module';
import { LandingViewComponent } from './landing-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponentModule } from '../../navigation/navigation.component';
import { HeaderComponentModule } from '../../header/header.component';

@NgModule({
  declarations: [LandingViewComponent],
  imports: [
    CommonModule,
    LandingViewRoutingModule,
    MatSidenavModule,
    NavigationComponentModule,
    HeaderComponentModule,
  ],
})
export class LandingViewModule {}
