import { Component } from '@angular/core';
import {listme} from "../../../../Model/listme";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ListServisesService} from "../../../../Service/list-servises.service";

@Component({
  selector: 'app-listcompnet',
  templateUrl: './listcompnet.component.html',
  styleUrl: './listcompnet.component.css'
})
export class ListcompnetComponent {
  shabion!: listme[];
  formGroup: FormGroup; // Change type to FormGroup

  constructor(
    private shabionServises: ListServisesService,
    private fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: new FormControl<string>('', Validators.required),
      family: new FormControl<string>('', Validators.required),
      tahsilalt: new FormControl<string>('', Validators.required),
      nameFather: new FormControl<string>('', Validators.required),
      addressHome: new FormControl<string>('', Validators.required),
      addressWork: new FormControl<string>('', Validators.required),
      naumberphon: new FormControl<string>('', Validators.required),
    });
  }

  ngOnInit() {
    this.shabionServises.getLIST().subscribe(liss => this.shabion = liss);
  }



}
