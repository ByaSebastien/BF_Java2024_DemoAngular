import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimerComponent} from './timer/timer.component';
import {ExosComponent} from './exos.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '', component: ExosComponent, children: [
      {path: 'exo01', component: TimerComponent},
      {path: 'exo02', component: ShoppingListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule {
}
