import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsFormularyComponent } from './firts-formulary.component';

describe('FirtsFormularyComponent', () => {
  let component: FirtsFormularyComponent;
  let fixture: ComponentFixture<FirtsFormularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtsFormularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtsFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
