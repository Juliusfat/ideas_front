import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeaRoutingModule } from './idea-routing.module';
import { IdeaComponent } from './idea.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [IdeaComponent],
  imports: [
    CommonModule,
    IdeaRoutingModule,
    CardModule
  ],
  exports: [
    IdeaComponent
  ]
})
export class IdeaModule { }
