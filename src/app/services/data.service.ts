import { LocalStorageService } from './localStorage.service';
import { Injectable } from "@angular/core";
import { FormModel } from "../model/formModel";

@Injectable()
export class DataService{
  contactList:FormModel[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  createNew(data: FormModel) {
    this.contactList.push(data);
    this.localStorageService.saveOnLocalStorage(this.contactList);
  }

  deleteFromArray(index: number) {
    this.contactList.splice(index, 1);
    this.localStorageService.saveOnLocalStorage(this.contactList);
  }

  updateFromArray(data: FormModel, index: number) {
    this.contactList[index].name = data.name;
    this.contactList[index].lastName = data.lastName;
    this.contactList[index].adress = data.adress;
    this.contactList[index].phone = data.phone;
    this.contactList[index].createdAt = data.createdAt;

    this.localStorageService.saveOnLocalStorage(this.contactList);
  }

}
