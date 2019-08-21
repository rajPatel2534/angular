import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './container/main-container/main-container.component';
import { DatePipeComponent } from './features/date-pipe/date-pipe.component';
import { NumberpipeComponent } from './features/numberpipe/numberpipe.component';
import { NgBootstrapComponent } from './features/ng-bootstrap/ng-bootstrap.component';


const routes: Routes = [
  {
    path: '',

    component : MainContainerComponent,
    children:[
      {
        path : '',
        redirectTo:'date',
        pathMatch:'full'
        
      },
      {
        path : 'date',
        component : DatePipeComponent
      },
      {
        path :'number',
        component  : NumberpipeComponent
      },{
        path : 'bootstrap',
        component : NgBootstrapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
