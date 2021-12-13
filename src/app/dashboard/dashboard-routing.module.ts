import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  { path: '', 
  component: DashboardComponent,
  children : [
    {
      path : 'dynamicForm',
      component : DynamicComponent
    }
  ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
