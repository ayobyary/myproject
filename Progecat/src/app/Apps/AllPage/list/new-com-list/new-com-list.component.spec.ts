import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComListComponent } from './new-com-list.component';

describe('NewComListComponent', () => {
  let component: NewComListComponent;
  let fixture: ComponentFixture<NewComListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewComListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewComListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
