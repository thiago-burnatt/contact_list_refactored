import { DataService } from './../services/data.service';
import { Component } from '@angular/core';
import { FormModel } from '../model/formModel';

import { faSignature, faPhone, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent {
  faSignature = faSignature;
  faPhone = faPhone;
  faInfoCircle = faInfoCircle;

  contactList: FormModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.contactList = this.dataService.contactList;
  }

  onDelete(i: number) {
    this.dataService.deleteFromArray(i);
  }

}
