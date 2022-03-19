import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinobiDetailComponent } from './shinobi-detail.component';

describe('ShinobiDetailComponent', () => {
  let component: ShinobiDetailComponent;
  let fixture: ComponentFixture<ShinobiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShinobiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinobiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
