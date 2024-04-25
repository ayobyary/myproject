import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompnetcolComponent } from './listcompnetcol.component';

describe('ListcompnetcolComponent', () => {
  let component: ListcompnetcolComponent;
  let fixture: ComponentFixture<ListcompnetcolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListcompnetcolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcompnetcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
