import { LocalStorageService } from './localStorage.service';
import { Injectable } from "@angular/core";
import { FormModel } from "../model/formModel";

@Injectable()
export class DataService {
  contactList: FormModel[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  createNew(data: FormModel) {
    this.contactList.push(data);
    this.localStorageService.saveOnLocalStorage(this.contactList);
  }

  findOne(id: number): FormModel {
    return this.contactList[id];
  }

  deleteFromArray(index: number) {
    this.contactList.splice(index, 1);
    this.localStorageService.saveOnLocalStorage(this.contactList);
  }

  updateFromArray(data: FormModel, index: number) {
    this.contactList[index] = data;

    this.localStorageService.saveOnLocalStorage(this.contactList);
  }

}
