export class Employee {

  constructor(id: number, name: string, email: string, image:any) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
  }

  id: number;
  name: string;
  email: string;
  image: any;
}
