import { Component } from '@angular/core';
import {listme} from "../../../../Model/listme";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ListServisesService} from "../../../../Service/list-servises.service";

@Component({
  selector: 'app-new-com-list',
  templateUrl: './new-com-list.component.html',
  styleUrl: './new-com-list.component.css'
})
export class NewComListComponent {
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

  FunFormSend() {
    const formData = this.formGroup.value as listme; // Cast to listme type
    const formD = this.formGroup.value; // Cast to listme type
    console.log(formData);
    this.shabionServises.add(formD).subscribe();
    this.shabion.push(formD);
  }

}
