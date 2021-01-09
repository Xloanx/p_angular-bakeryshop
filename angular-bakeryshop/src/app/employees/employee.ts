export class Employee {

  constructor(id: number, first_name: string, last_name: string, email: string, avatar:any) {
    this.id = id;
    this.last_name = last_name;
    this.first_name = first_name;
    this.email = email;
    this.avatar = avatar;
    
  }

  id: number;
  last_name: string;
  first_name: string;
  email: string;
  avatar: any;
}
