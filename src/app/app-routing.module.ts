// Importing the NgModule decorator from Angular core to define this file as a module.
import { NgModule } from '@angular/core';
// Importing RouterModule and Routes to enable and configure Angular routing.
import { RouterModule, Routes } from '@angular/router';
// Importing components to define routes for them.
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Defining the routes for the application.
// The `Routes` type ensures that each route is configured correctly.
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    /*
    This route redirects an empty path ('') to '/home'.
    The `pathMatch: 'full'` ensures that the entire URL path must match the empty string
    for this redirect to apply. This is useful for default landing pages.
    */
  },
  {
    path: 'home',
    component: HomeComponent
    /*
    This route maps the '/home' URL to the `HomeComponent`.
    When the user navigates to '/home', the `HomeComponent` is displayed.
    */
  },
  {
    path: 'about',
    component: AboutComponent
    /*
    This route maps the '/about' URL to the `AboutComponent`.
    */
  },
  {
    path: 'exo',
    loadChildren: () => import('./exos/exos.module').then(m => m.ExosModule)
    /*
    Lazy loading for the `ExosModule`:
    When the user navigates to '/exo', Angular dynamically loads the `ExosModule` from the specified file.
    This improves performance by loading the module only when needed.
    */
  },
  {
    path: 'demo',
    loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule)
    /*
    Similar to the 'exo' route, this sets up lazy loading for the `DemosModule`.
    It is loaded only when the user navigates to '/demo'.
    */
  },
];

@NgModule({
  // Configures the router with the routes defined above.
  imports: [RouterModule.forRoot(routes)],
  /*
  The `forRoot` method is used to configure the router at the application's root level.
  It creates the routing service and sets up the routes defined in the `routes` array.
  */

  // Makes the RouterModule available for use in other parts of the application.
  exports: [RouterModule]
})
// Exporting the AppRoutingModule class, which serves as the application's routing configuration module.
export class AppRoutingModule { }
