import { DataService } from './../services/data.service';
import { Component, Input } from '@angular/core';
import { FormModel } from '../model/formModel';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent {
  contactList: FormModel[] = [];
  enableInput: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.contactList = this.dataService.contactList;

    if (localStorage.hasOwnProperty("contacts")) {
      for (let contact of JSON.parse(localStorage.getItem("contacts"))) {
        this.contactList.push(contact)
      }
    }
  }

  onDelete(i: number) {
    this.dataService.deleteFromArray(i);
  }

  onUpdate(
    nameUpdate: HTMLInputElement,
    lastanameUpdate: HTMLInputElement,
    adressUpdate: HTMLInputElement,
    phoneUpdate: HTMLInputElement,
    index: number) {
    this.dataService.updateFromArray(
      new FormModel(
        nameUpdate.value,
        lastanameUpdate.value,
        adressUpdate.value,
        phoneUpdate.valueAsNumber,
        new Date().toLocaleString()
    ), index)

    this.enableInput = !this.enableInput;
  }

  onShowDetails() {

  }

  onEnableInput() {
    this.enableInput = !this.enableInput;
  }

}
