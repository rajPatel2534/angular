import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainContainerComponent } from './container/main-container/main-container.component';
import { MainContainerComponent } from './base/container/main-container/main-container.component';

const routes: Routes = [
  
  // {
  //   path: '',
  //   component : MainContainerComponent
  // }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
