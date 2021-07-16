import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginViewRoutingModule } from './login-view-routing.module';
import { LoginViewComponent } from './login-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginViewComponent],
  imports: [
    CommonModule,
    LoginViewRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class LoginViewModule {}
