import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CardModule } from 'primeng/card'
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    CardModule
  ]
})
export class AuthModule { }
