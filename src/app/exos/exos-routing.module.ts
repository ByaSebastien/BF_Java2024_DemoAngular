// Importing Angular core's NgModule decorator to define this file as a module.
import { NgModule } from '@angular/core';
// Importing RouterModule and Routes to enable and configure Angular routing.
import { RouterModule, Routes } from '@angular/router';
// Importing the components to be associated with specific routes.
import { TimerComponent } from './timer/timer.component';
import { ExosComponent } from './exos.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ExoFormulaireComponent} from './exo-formulaire/exo-formulaire.component';

// Defining the routes for this feature module.
const routes: Routes = [
  {
    // Default path for the module, associated with the ExosComponent.
    path: '',
    component: ExosComponent,
    children: [
      // Nested route for the 'exo01' path, associated with the TimerComponent.
      { path: 'exo01', component: TimerComponent },
      // Nested route for the 'exo02' path, associated with the ShoppingListComponent.
      { path: 'exo02', component: ShoppingListComponent },
      { path: 'exo03', component: ExoFormulaireComponent},
    ]
  },
];

@NgModule({
  // Importing the RouterModule and configuring it with the defined routes.
  imports: [RouterModule.forChild(routes)],
  /*
   * forChild is used here because this is a feature module.
   * It registers the routes specific to this module without reinitializing the router.
   */

  // Exporting the RouterModule so the routes can be accessed by other parts of the application.
  exports: [RouterModule]
})
export class ExosRoutingModule {
  /*
   * The ExosRoutingModule defines and manages the routing configuration for the Exos feature module.
   * It ensures that the components associated with the routes are loaded correctly.
   */
}
