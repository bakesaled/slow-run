import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingViewRoutingModule } from './landing-view-routing.module';
import { LandingViewComponent } from './landing-view.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponentModule } from '../../navigation/navigation.component';
import { HeaderComponentModule } from '../../header/header.component';
import { ShowIfLoggedInDirectiveModule } from '../../directives/show-if-logged-in/show-if-logged-in.directive';

@NgModule({
  declarations: [LandingViewComponent],
  imports: [
    CommonModule,
    LandingViewRoutingModule,
    MatSidenavModule,
    NavigationComponentModule,
    HeaderComponentModule,
    ShowIfLoggedInDirectiveModule,
  ],
})
export class LandingViewModule {}
