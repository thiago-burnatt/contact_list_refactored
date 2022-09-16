import { DataService } from './../services/data.service';
import { FormModel } from './../model/formModel';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent {

  constructor(
    private dataservice: DataService)
    { }

  onSubmit(form: NgForm) {
    this.dataservice.createNew(
      new FormModel(
        form.value.name,
        form.value.lastname,
        form.value.adress,
        form.value.phone,
        new Date().toLocaleString()
    ))
    if (form.valid) {
      form.reset();
    }
  }

  clearFieldsBtn(form: NgForm) {
    form.reset();
  }

}
