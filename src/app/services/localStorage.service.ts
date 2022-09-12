import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {

  saveOnLocalStorage(array: {}) {
    localStorage.setItem('contacts', JSON.stringify(array))
  }
}
