import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (localStorage.hasOwnProperty("contacts") && this.dataService.contactList.length === 0) {
      for (let contact of JSON.parse(localStorage.getItem("contacts"))) {
        this.dataService.contactList.push(contact);
      }
    }
  }
}
