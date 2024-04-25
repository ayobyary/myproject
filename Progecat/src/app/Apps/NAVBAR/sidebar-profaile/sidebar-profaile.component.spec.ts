import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProfaileComponent } from './sidebar-profaile.component';

describe('SidebarProfaileComponent', () => {
  let component: SidebarProfaileComponent;
  let fixture: ComponentFixture<SidebarProfaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarProfaileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarProfaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
