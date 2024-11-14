/*
 * Defining an interface named Trainer.
 * This interface represents the structure of a trainer object,
 * including details such as name, picture, status, and a unique identifier.
 */
export interface Trainer {
  /*
   * The 'id' property is a unique numeric identifier for the trainer.
   * It is of type 'number' and is required, ensuring every Trainer object has an ID.
   */
  id: number;

  /*
   * The 'firstname' property represents the first name of the trainer.
   * It is of type 'string' and is required, ensuring every Trainer object has a first name.
   */
  firstname: string;

  /*
   * The 'lastname' property represents the last name of the trainer.
   * It is of type 'string' and is required, ensuring every Trainer object has a last name.
   */
  lastname: string;

  /*
   * The 'pictureUrl' property is a string representing the URL of the trainer's picture.
   * It is required and typically used to display the trainer's profile image.
   */
  pictureUrl: string;

  /*
   * The 'isActive' property is a boolean indicating whether the trainer is currently active.
   * It is required and can be used to manage or filter trainers based on their status.
   */
  isActive: boolean;
}
