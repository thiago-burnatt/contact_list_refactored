import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormModel } from './model/formModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  contactList: FormModel[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.contactList = this.dataService.contactList;

    if (localStorage.hasOwnProperty("contacts")) {
      for (let contact of JSON.parse(localStorage.getItem("contacts"))) {
        this.contactList.push(contact)
      }
    }
  }

}
