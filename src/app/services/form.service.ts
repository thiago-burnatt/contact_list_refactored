import { NgForm } from '@angular/forms';
export class FormService {

  onClearFields(form: NgForm)
    {
      form.value.name = '';
      form.value.lastname = '';
      form.value.adress = '';
      form.value.phone = '';

  }
}
