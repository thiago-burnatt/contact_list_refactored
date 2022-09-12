import { DataService } from './../services/data.service';
import { Component, Input } from '@angular/core';
import { FormModel } from '../model/formModel';

@Component({
  selector: 'app-contact-display',
  templateUrl: './contact-display.component.html',
  styleUrls: ['./contact-display.component.css']
})
export class ContactDisplayComponent {
  @Input() contact: FormModel;
  @Input() index: number;
  enableInput: boolean = false;

  constructor(private dataService: DataService) { }

  onDelete() {
    this.dataService.deleteFromArray(this.index);
  }

  onUpdate(
    nameUpdate: HTMLInputElement,
    lastanameUpdate: HTMLInputElement,
    adressUpdate: HTMLInputElement,
    phoneUpdate: HTMLInputElement) {
    this.dataService.updateFromArray(
      new FormModel(
        nameUpdate.value,
        lastanameUpdate.value,
        adressUpdate.value,
        phoneUpdate.valueAsNumber,
        new Date().toLocaleString()
    ), this.index)

    this.enableInput = !this.enableInput;
  }

  onEnableInput() {
    this.enableInput = !this.enableInput;
  }

}
