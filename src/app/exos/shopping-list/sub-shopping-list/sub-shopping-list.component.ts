import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/models/product';
import {ChangeTypeEnum} from '../../../shared/enums/change-type.enum';
import {ChangeList} from '../../../shared/models/change-list';

@Component({
  selector: 'app-sub-shopping-list',
  templateUrl: './sub-shopping-list.component.html',
  styleUrl: './sub-shopping-list.component.scss'
})
export class SubShoppingListComponent {

  protected readonly ChangeTypeEnum = ChangeTypeEnum;

  @Input({required: true})
  products!: Product[];

  @Output()
  private changeList: EventEmitter<ChangeList> = new EventEmitter<ChangeList>();

  triggerChangeList(changeList: ChangeList){
    this.changeList.emit(changeList);
  }

}
