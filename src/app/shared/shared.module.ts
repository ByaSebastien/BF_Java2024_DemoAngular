import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { TempPipe } from './pipes/temp.pipe';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    TempPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ToFahrenheitPipe,
    TempPipe
  ]
})
export class SharedModule { }
