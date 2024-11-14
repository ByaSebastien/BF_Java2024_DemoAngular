export interface Person {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
  siblings: number;
  country: string;
  single: boolean;
}
