import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifaltPageComponent } from './difalt-page.component';

describe('DifaltPageComponent', () => {
  let component: DifaltPageComponent;
  let fixture: ComponentFixture<DifaltPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifaltPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifaltPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
