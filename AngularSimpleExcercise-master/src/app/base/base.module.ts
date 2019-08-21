import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { HeaderComponent } from './container/header/header.component';
import { FooterComponent } from './container/footer/footer.component';
import { MainContainerComponent } from './container/main-container/main-container.component';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { DatePipeComponent } from './features/date-pipe/date-pipe.component';
import { NgBootstrapComponent } from './features/ng-bootstrap/ng-bootstrap.component';
import { NumberpipeComponent } from './features/numberpipe/numberpipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    SidebarComponent,
    DatePipeComponent,
    NgBootstrapComponent,
    NumberpipeComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CarouselModule.forRoot()
  ],
  exports : []
})
export class BaseModule { }
