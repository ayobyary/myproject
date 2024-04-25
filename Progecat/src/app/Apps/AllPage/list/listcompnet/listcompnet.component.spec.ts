import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompnetComponent } from './listcompnet.component';

describe('ListcompnetComponent', () => {
  let component: ListcompnetComponent;
  let fixture: ComponentFixture<ListcompnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListcompnetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcompnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
