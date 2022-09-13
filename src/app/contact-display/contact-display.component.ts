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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.contactList = this.dataService.contactList;
  }

  onDelete(i: number) {
    this.dataService.deleteFromArray(i);
  }

}
