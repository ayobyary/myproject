import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listWrap:boolean = true; // متغیر برای ذخیره حالت

  toggleListWrap() {
    this.listWrap = true;
  }  toggleListWrapp() {
    this.listWrap = false;
  }


}
// this.listWrap = this.listWrap === 'flex-wrap' ? 'flex-wrap-reverse' : 'flex-wrap';
