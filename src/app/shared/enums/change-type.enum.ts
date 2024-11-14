// Defining an enumeration (enum) named ChangeTypeEnum.
export enum ChangeTypeEnum {
  /*
   * The DOWN value represents a decrease or downward change.
   * It is automatically assigned the numeric value 0 by TypeScript.
   */
  DOWN,

  /*
   * The UP value represents an increase or upward change.
   * It is automatically assigned the numeric value 1, incrementing from the previous value (DOWN).
   */
  UP,

  /*
   * The REMOVE value represents a removal action or deletion.
   * It is automatically assigned the numeric value 2, incrementing from the previous value (UP).
   */
  REMOVE,
}
