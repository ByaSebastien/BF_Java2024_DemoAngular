// Importing the NgModule decorator to define this file as an Angular module.
import { NgModule } from '@angular/core';
// Importing CommonModule to use common Angular directives (e.g., ngIf, ngFor) in this module.
import { CommonModule } from '@angular/common';
// Importing FormsModule to enable template-driven forms in this module.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Importing custom pipes declared in this module.
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { TempPipe } from './pipes/temp.pipe';
import { TimePipe } from './pipes/time.pipe';
import { FormErrorComponent } from './components/form-error/form-error.component';

@NgModule({
  // The `declarations` array specifies the components, directives, and pipes that belong to this module.
  declarations: [
    ToFahrenheitPipe, // Custom pipe to convert temperatures to Fahrenheit.
    TempPipe,         // Custom pipe to format or process temperature values.
    TimePipe,         // Custom pipe to format or process time values.
    FormErrorComponent
  ],
  // The `imports` array lists the modules that this module depends on.
  imports: [
    CommonModule, // Provides common Angular directives like *ngIf, *ngFor, etc.
    FormsModule,   // Enables template-driven forms for components in this module.
    ReactiveFormsModule,
  ],
  // The `exports` array specifies the components, directives, pipes, and modules that this module makes available to other modules.
  exports: [
    FormsModule,        // Makes FormsModule available for other modules importing SharedModule.
    ReactiveFormsModule,
    ToFahrenheitPipe,   // Makes the ToFahrenheitPipe reusable in other modules.
    TempPipe,           // Makes the TempPipe reusable in other modules.
    TimePipe,            // Makes the TimePipe reusable in other modules.
    FormErrorComponent,
  ]
})
// Defining the SharedModule class, which organizes and reuses common functionality across the application.
export class SharedModule { }
