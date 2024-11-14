import {Component} from '@angular/core';
import {Product} from '../../shared/models/product';
import {ChangeList} from '../../shared/models/change-list';
import {ChangeTypeEnum} from '../../shared/enums/change-type.enum';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {

  productName: string = '';
  productQuantity: number = 1;

  products: Product[] = [
    {name: 'Diamond DA-40', quantity: 7},
    {name: 'Bowing 747', quantity: 32},
  ];

  addProduct() {
    if (this.productName.trim() === '' || this.productQuantity < 1) {
      return;
    }
    let p = this.products.find(p => p.name === this.productName);
    if (p) {
      p.quantity += this.productQuantity;
    } else {
      this.products.push({name: this.productName, quantity: this.productQuantity});
      console.log(this.products);
    }
  }

  reactToChangeList(changeList: ChangeList) {
    switch (changeList.changeType) {
      case ChangeTypeEnum.DOWN:
        this.products[changeList.index].quantity -= 1;
        if(this.products[changeList.index].quantity <= 0) {
          this.products.splice(changeList.index, 1);
        }
        break;
      case ChangeTypeEnum.UP:
        this.products[changeList.index].quantity += 1;
        break;
      case ChangeTypeEnum.REMOVE:
        this.products.splice(changeList.index, 1);
        break;
    }
  }
}
