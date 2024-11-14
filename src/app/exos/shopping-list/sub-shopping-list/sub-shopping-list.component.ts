// Importing necessary Angular features and custom types/models.
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ChangeTypeEnum } from '../../../shared/enums/change-type.enum';
import { ChangeList } from '../../../shared/models/change-list';

@Component({
  selector: 'app-sub-shopping-list',
  /*
   * The 'selector' specifies the custom HTML tag for this component.
   * The tag <app-sub-shopping-list> can be used in templates to include this component.
   */

  templateUrl: './sub-shopping-list.component.html',
  /*
   * The 'templateUrl' points to the external HTML file that defines this component's structure and layout.
   */

  styleUrl: './sub-shopping-list.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file that contains styles scoped to this component.
   */
})
export class SubShoppingListComponent {
  /*
   * This class defines the behavior and data for the SubShoppingListComponent,
   * which is a child component for displaying and managing the shopping list items.
   */

  protected readonly ChangeTypeEnum = ChangeTypeEnum;
  /*
   * Exposes the ChangeTypeEnum for use in the template.
   * The `readonly` keyword ensures this property cannot be modified.
   */

  @Input({ required: true })
  products!: Product[];
  /*
   * The 'products' property is an input binding that receives the product list from the parent component.
   * The 'required: true' decorator ensures this property is mandatory.
   * The '!' non-null assertion operator indicates that this property will always be initialized by the parent.
   */

  @Output()
  private changeList: EventEmitter<ChangeList> = new EventEmitter<ChangeList>();
  /*
   * The 'changeList' property is an output binding.
   * It emits a ChangeList event to the parent component whenever a product change (e.g., quantity update or removal) occurs.
   */

  triggerChangeList(changeList: ChangeList) {
    /*
     * The triggerChangeList method emits a ChangeList event to the parent component.
     * Parameters:
     * - changeList: An object conforming to the ChangeList interface, specifying the type of change and the affected product.
     */

    this.changeList.emit(changeList);
    /*
     * Calls the emit method of the EventEmitter instance to notify the parent component
     * of the change in the shopping list.
     */
  }
}
