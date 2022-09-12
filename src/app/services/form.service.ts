export class FormService {

  onClearFields(nameInput: HTMLInputElement,
                lastNameInput: HTMLInputElement,
                adressInput: HTMLInputElement,
                phoneInput: HTMLInputElement)
    {
    nameInput.value = '';
    lastNameInput.value = '';
    adressInput.value = '';
    phoneInput.value = '';
  }
}
