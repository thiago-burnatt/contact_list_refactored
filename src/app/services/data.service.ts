import { HttpClient } from "@angular/common/http";
import { map, Subject } from "rxjs";

import { Injectable } from "@angular/core";
import { FormModel } from "../model/formModel";

@Injectable()
export class DataService {
  contactList: FormModel[] = [];

  constructor(private http: HttpClient) {}

  createNew(contact: FormModel) {
    this.http.post('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json'
    , contact).subscribe(() => {
      this.contactList.push(contact);
    });
   }

   fetchContacts() {
    this.http.get('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json')
      .pipe(map(responseData => {
          for (const key in responseData) {
            this.contactList.push({...responseData[key], id: key});
          }
        }
      )).subscribe(() => {
    })
  }

  updateContacts() {
    this.http.put('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json'
    , this.contactList).subscribe((data) => {console.log(data)});
  }

  findOne(id: number): FormModel {
    return this.contactList[id];
  }

  deleteFromArray(index: number) {
    this.contactList.splice(index, 1);
    this.updateContacts();
  }

  updateFromArray(data: FormModel, index: number) {
    this.contactList[index] = data;
    this.updateContacts();
  }

}
