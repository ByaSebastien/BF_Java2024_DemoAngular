import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { TempPipe } from './pipes/temp.pipe';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TempPipe,
    TimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    TempPipe,
    TimePipe
  ]
})
export class SharedModule { }
