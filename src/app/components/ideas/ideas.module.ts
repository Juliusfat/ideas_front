import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeasComponent } from './ideas.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IdeaModule } from '../idea/idea/idea.module';


@NgModule({
  declarations: [IdeasComponent],
  imports: [
    CommonModule,
    IdeasRoutingModule,
    ProgressSpinnerModule,
    IdeaModule
  ]
})
export class IdeasModule { }
