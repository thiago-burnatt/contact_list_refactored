import { FormService } from './../services/form.service';
import { DataService } from './../services/data.service';
import { FormModel } from './../model/formModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent {

  constructor(
    private dataservice: DataService,
    private formService: FormService)
    { }

  onSubmit(
    nameInput: HTMLInputElement,
    lastNameInput: HTMLInputElement,
    adressInput: HTMLInputElement,
    phoneInput: HTMLInputElement) {
    this.dataservice.createNew(
      new FormModel(
        nameInput.value,
        lastNameInput.value,
        adressInput.value,
        phoneInput.valueAsNumber,
        new Date().toLocaleString()
    ))
    this.formService.onClearFields(nameInput, lastNameInput, adressInput, phoneInput);
  }

  clearFieldsBtn(nameInput, lastNameInput, adressInput, phoneInput) {
    this.formService.onClearFields(nameInput, lastNameInput, adressInput, phoneInput);
  }
}
