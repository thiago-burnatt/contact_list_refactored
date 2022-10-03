// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { map } from "rxjs";
// import { FormModel } from '../model/formModel';

// @Injectable()
// export class HttpRequestsServices {

//   constructor(private http: HttpClient) {}

//   storeContact(contact: FormModel) {
//    return this.http.post('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json'
//    ,contact);
//   }

//   fetchContacts() {
//     return this.http.get('https://contact-list-e2e9a-default-rtdb.firebaseio.com/contacts.json')
//       .pipe(map(responseData => {
//           const contactArray: FormModel[] = [];
//           for (const key in responseData) {
//             contactArray.push({...responseData[key], id: key});
//           }
//           return contactArray;
//         }
//       ));
//   }
// }
