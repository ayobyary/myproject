import { Component } from '@angular/core';
import {ListServisesService} from "../../../../Service/list-servises.service";
import {listme} from "../../../../Model/listme";

@Component({
  selector: 'app-listcompnetcol',
  templateUrl: './listcompnetcol.component.html',
  styleUrl: './listcompnetcol.component.css'
})
export class ListcompnetcolComponent {
  shabion!: listme[];
  itemsPerPage = 10; // Items to display per page
  currentPage = 1; // Current page number (starts from 1)
  constructor(
    private shabionServises: ListServisesService,
  ) {}
  ngOnInit() {
    this.shabionServises.getLIST().subscribe(liss => this.shabion = liss);
  }
  get totalPages(): number {
    return Math.ceil(this.shabion.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.shabion.length, this.startIndex + this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  protected readonly Math = Math;
}
