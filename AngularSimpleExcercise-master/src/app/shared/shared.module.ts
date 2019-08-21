import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CollapseModule,

  ],
  exports : [CollapseModule]
})
export class SharedModule {
 }
