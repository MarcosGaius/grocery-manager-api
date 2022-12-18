export interface UserInterface {
  username: string;
  email: string;
  password?: string;
  first_name: string;
  last_name: string;
  profile_picture?: string;
  is_active: string;
}

export interface ResponseUserInterface {
  _id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture?: string;
}
