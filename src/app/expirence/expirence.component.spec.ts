import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpirenceComponent } from './expirence.component';

describe('ExpirenceComponent', () => {
  let component: ExpirenceComponent;
  let fixture: ComponentFixture<ExpirenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpirenceComponent]
    });
    fixture = TestBed.createComponent(ExpirenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
