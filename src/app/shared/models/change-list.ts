// Importing the ChangeTypeEnum enumeration to be used within the interface.
import { ChangeTypeEnum } from '../enums/change-type.enum';

/*
 * Defining an interface named ChangeList.
 * Interfaces in TypeScript are used to define the structure of an object,
 * specifying the properties and their types.
 */
export interface ChangeList {
  /*
   * The 'index' property represents the position of an item in a list or collection.
   * It is of type 'number', meaning it must hold a numeric value.
   */
  index: number;

  /*
   * The 'changeType' property specifies the type of change to be applied.
   * It is of type 'ChangeTypeEnum', meaning it must hold one of the values defined in the ChangeTypeEnum.
   * Possible values:
   * - ChangeTypeEnum.DOWN (e.g., for a downward change or decrement).
   * - ChangeTypeEnum.UP (e.g., for an upward change or increment).
   * - ChangeTypeEnum.REMOVE (e.g., for a removal action).
   */
  changeType: ChangeTypeEnum;
}
