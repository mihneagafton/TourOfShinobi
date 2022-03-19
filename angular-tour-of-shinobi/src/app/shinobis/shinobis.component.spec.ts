import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinobisComponent } from './shinobis.component';

describe('ShinobisComponent', () => {
  let component: ShinobisComponent;
  let fixture: ComponentFixture<ShinobisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShinobisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinobisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
