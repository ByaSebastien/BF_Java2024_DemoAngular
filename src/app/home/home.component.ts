import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemoService} from '../shared/services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private readonly _demoService: DemoService,
  ) {
    console.log("In constructor");
  }

  ngOnInit(): void {
    console.log("In ngOnInit");
    this._demoService.myMethod();
  }

  ngOnDestroy(): void {
    console.log("On ngOnDestroy");
  }
}
