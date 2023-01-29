import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnIngredientsComponent } from './own-ingredients.component';

describe('OwnIngredientsComponent', () => {
  let component: OwnIngredientsComponent;
  let fixture: ComponentFixture<OwnIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
