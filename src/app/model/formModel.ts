export class FormModel {
  name: string;
  lastName: string;
  adress: string;
  phone: number;
  createdAt: string;

  constructor(name: string, lastName: string, adress: string, phone: number,
    createdAt: string) {
    this.name = name;
    this.lastName = lastName;
    this.adress = adress;
    this.phone = phone;
    this.createdAt = createdAt;
  }
}
