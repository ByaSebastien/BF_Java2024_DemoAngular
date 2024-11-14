// Importing Angular's Component decorator to define this class as a component.
import { Component } from '@angular/core';
// Importing the Product interface to define the structure of product objects.
import { Product } from '../../shared/models/product';
// Importing the ChangeList interface for handling list changes.
import { ChangeList } from '../../shared/models/change-list';
// Importing the ChangeTypeEnum enumeration for defining types of changes.
import { ChangeTypeEnum } from '../../shared/enums/change-type.enum';

@Component({
  selector: 'app-shopping-list',
  /*
   * The 'selector' specifies the custom HTML tag associated with this component.
   * The tag <app-shopping-list> can be used in templates to include this component.
   */

  templateUrl: './shopping-list.component.html',
  /*
   * The 'templateUrl' points to the external HTML file that defines the structure of this component.
   * This file will likely include the layout for the shopping list UI.
   */

  styleUrl: './shopping-list.component.scss'
  /*
   * The 'styleUrl' points to the external SCSS file that contains styles for this component.
   * These styles are scoped to the ShoppingListComponent.
   */
})
export class ShoppingListComponent {
  /*
   * This class contains the logic for the ShoppingListComponent, including properties
   * for tracking products and methods for managing the shopping list.
   */

  productName: string = '';
  /*
   * The 'productName' property stores the name of the product to be added to the shopping list.
   * It is bound to the input field in the template.
   */

  productQuantity: number = 1;
  /*
   * The 'productQuantity' property stores the quantity of the product to be added.
   * It is bound to the input field in the template.
   */

  products: Product[] = [
    { name: 'Diamond DA-40', quantity: 7 },
    { name: 'Bowing 747', quantity: 32 },
  ];
  /*
   * The 'products' array contains the list of products in the shopping list.
   * Each product is represented as an object adhering to the 'Product' interface.
   */

  addProduct() {
    /*
     * The addProduct method adds a new product to the shopping list or updates the quantity
     * of an existing product if it is already in the list.
     */
    if (this.productName.trim() === '' || this.productQuantity < 1) {
      // Prevents adding a product if the name is empty or the quantity is less than 1.
      return;
    }

    let p = this.products.find(p => p.name === this.productName);
    /*
     * Checks if a product with the same name already exists in the products array.
     * If found, updates its quantity.
     */

    if (p) {
      p.quantity += this.productQuantity;
    } else {
      // Adds a new product to the list if it does not already exist.
      this.products.push({ name: this.productName, quantity: this.productQuantity });
      console.log(this.products); // Logs the updated products array.
    }
  }

  reactToChangeList(changeList: ChangeList) {
    /*
     * The reactToChangeList method handles changes to the shopping list.
     * It responds to different change types defined in the ChangeTypeEnum.
     */
    switch (changeList.changeType) {
      case ChangeTypeEnum.DOWN:
        // Decreases the quantity of the specified product.
        this.products[changeList.index].quantity -= 1;
        if (this.products[changeList.index].quantity <= 0) {
          // Removes the product from the list if its quantity reaches 0 or below.
          this.products.splice(changeList.index, 1);
        }
        break;

      case ChangeTypeEnum.UP:
        // Increases the quantity of the specified product.
        this.products[changeList.index].quantity += 1;
        break;

      case ChangeTypeEnum.REMOVE:
        // Removes the specified product from the list.
        this.products.splice(changeList.index, 1);
        break;
    }
  }
}
