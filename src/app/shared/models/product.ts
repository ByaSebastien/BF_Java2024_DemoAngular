/*
 * Defining an interface named Product.
 * This interface represents the structure of a product object,
 * which includes its name and quantity.
 */
export interface Product {
  /*
   * The 'name' property represents the name of the product.
   * It is of type 'string' and is required, meaning every Product object must have a name.
   */
  name: string;

  /*
   * The 'quantity' property specifies the amount or stock of the product.
   * It is of type 'number' and is required, meaning every Product object must have a quantity.
   */
  quantity: number;
}
