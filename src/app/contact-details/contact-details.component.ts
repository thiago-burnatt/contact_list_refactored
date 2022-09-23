import { NgForm } from '@angular/forms';
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

  onUpdate(form: NgForm) {
    this.dataService.updateFromArray(
      new FormModel(
        form.value.name,
        form.value.lastname,
        form.value.adress,
        form.value.phone,
        new Date().toLocaleString(),
    ), this.id)

    this.enableInput = !this.enableInput;
  }

  onDelete() {
    if (confirm('Tem certeza?') === true) {
      this.dataService.deleteFromArray(this.id);
      this.router.navigate(['']);
    }
  }

  onGoBack() {
    this.router.navigate(['']);
  }

  onEnableInput() {
    this.enableInput = !this.enableInput;
  }

}
