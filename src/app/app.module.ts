// Importing the core NgModule decorator from Angular.
import { NgModule } from '@angular/core';
// Importing BrowserModule, required for running the application in a web browser.
import { BrowserModule } from '@angular/platform-browser';

// Importing AppRoutingModule, which contains routing definitions for the application.
import { AppRoutingModule } from './app-routing.module';
// Importing the root component of the application.
import { AppComponent } from './app.component';
// Importing custom components defined in the application.
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// Importing BrowserAnimationsModule for enabling animations in the application.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  /*
  The `declarations` array lists all components, directives, and pipes that belong to this module.
  These are the building blocks of your application's UI.
  */
  declarations: [
    AppComponent, // The root component.
    HomeComponent, // Component for the Home page.
    AboutComponent, // Component for the About page.
    NavComponent, // Component for the navigation menu.
    HeaderComponent, // Component for the header section.
    FooterComponent, // Component for the footer section.
  ],

  /*
  The `imports` array lists other modules that this module depends on.
  These imported modules provide functionalities such as browser support, animations, and routing.
  */
  imports: [
    BrowserModule, // Enables Angular's basic functionalities for web browsers.
    BrowserAnimationsModule, // Adds support for Angular animations.
    AppRoutingModule, // Includes routing definitions for navigating between views.
  ],

  /*
  The `providers` array is used for dependency injection.
  Services and other dependencies can be registered here, making them available throughout the module.
  */
  providers: [],

  /*
  The `bootstrap` array specifies the root component that Angular should bootstrap (initialize) when the application starts.
  In this case, it is the AppComponent.
  */
  bootstrap: [AppComponent]
})
// Declaring the AppModule class, which is the root module of the Angular application.
export class AppModule { }
