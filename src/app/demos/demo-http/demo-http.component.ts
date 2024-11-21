import {Component} from '@angular/core';
import {YugiCard, YugiResult} from '../../shared/models/yugi.model';
import {YugiService} from './services/yugi.service';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrl: './demo-http.component.scss'
})
export class DemoHttpComponent {

  yugiResult!: YugiResult;

  constructor(
    private _yugiService: YugiService
  ) {
    this.getCards('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0');
  }

  getCards(url: string): void {
    this._yugiService.getCards(url).subscribe({
      next: (result: YugiResult) => {
        this.yugiResult = result;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  previous(){
    if(this.yugiResult.meta.previous_page){
      this.getCards(this.yugiResult.meta.previous_page);
    }
  }

  next() {
    if(this.yugiResult.meta.next_page){
      this.getCards(this.yugiResult.meta.next_page);
    }
  }
}
