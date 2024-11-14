import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { TempPipe } from './pipes/temp.pipe';
import { TimePipe } from './pipes/time.pipe';
import { FormErrorComponent } from './components/form-error/form-error.component';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TempPipe,
    TimePipe,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToFahrenheitPipe,
    TempPipe,
    TimePipe,
    FormErrorComponent
  ]
})
export class SharedModule { }
