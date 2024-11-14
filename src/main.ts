// Importing platformBrowserDynamic, which is responsible for bootstrapping an Angular application in a browser environment.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importing the AppModule, which is the root module of the Angular application.
// This module contains metadata about the application, including declarations, imports, and bootstrap components.
import { AppModule } from './app/app.module';

// Bootstrapping the Angular application with the root module (AppModule).
// This function initializes the Angular framework, compiles the application, and starts running it in the browser.
platformBrowserDynamic().bootstrapModule(AppModule, {
  // `ngZoneEventCoalescing` is an optimization feature.
  // It reduces the frequency of change detection cycles triggered by DOM events like clicks, inputs, etc.,
  // by coalescing (combining) multiple events into a single change detection cycle.
  // This can improve performance for applications with high-frequency DOM events.
  ngZoneEventCoalescing: true
})
  // Adding error handling in case the bootstrapping process fails.
  // If an error occurs during the bootstrap process, it will be logged to the browser console.
  .catch(err => console.error(err));
