// Importing the NgModule decorator to define this class as an Angular module.
import { NgModule } from '@angular/core';
// Importing CommonModule for common Angular directives (e.g., ngIf, ngFor).
import { CommonModule } from '@angular/common';

// Importing the routing module specific to the Exos module.
import { ExosRoutingModule } from './exos-routing.module';

// Importing components declared in this module.
import { TimerComponent } from './timer/timer.component';
import { ExosComponent } from './exos.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SubShoppingListComponent } from './shopping-list/sub-shopping-list/sub-shopping-list.component';

// Importing the SharedModule to reuse shared pipes, directives, and modules.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  // Declaring the components that belong to this module.
  declarations: [
    TimerComponent, // Component for the Timer functionality.
    ExosComponent, // The parent component for this module's features.
    ShoppingListComponent, // Component for the Shopping List feature.
    SubShoppingListComponent // Sub-component for managing items in the Shopping List.
  ],
  // Importing other modules required for this module's functionality.
  imports: [
    CommonModule, // Provides common Angular directives and features.
    ExosRoutingModule, // Registers the routing configuration for this module.
    SharedModule, // Imports shared features like pipes and reusable modules.
  ]
})
export class ExosModule {
  /*
   * The ExosModule organizes all components, routes, and features related to the Exos functionality.
   * It acts as a self-contained feature module, making the application modular and maintainable.
   */
}
