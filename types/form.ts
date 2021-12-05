
export type FormData = {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  agreement: boolean;
  phone: string;
  passeord: string;
};

export enum FormFields {
  firstName = 'firstName',
  lastName = 'lastName',
  country = 'country',
  email = 'email',
  agreement = 'agreement',

  password = 'password',
  phone = 'phone'
}


export type InputProps = {
  name: FormFields;
  title: string;
  type: string;
  options: unknown;
  placeholder?: string;
}
