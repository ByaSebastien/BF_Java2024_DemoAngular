import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  text: string = 'Hello World';

  constructor() {
    console.log("In service constructor")
  }

  myMethod(){
    console.log(this.text);
  }
}
