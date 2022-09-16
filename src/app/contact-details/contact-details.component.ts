import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { FormModel } from '../model/formModel';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: FormModel;
  enableInput: boolean = false;
  id: number;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this.dataService.findOne(+params['id']);
    })
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
        phoneUpdate.value,
        new Date().toLocaleString(),
    ), this.id)

    this.enableInput = !this.enableInput;
  }

  onDelete() {
    this.dataService.deleteFromArray(this.id);
    this.router.navigate(['']);
  }

  onGoBack() {
    this.router.navigate(['']);
  }

  onEnableInput() {
    this.enableInput = !this.enableInput;
  }

}
