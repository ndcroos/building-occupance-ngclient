import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInhabitantComponent } from './add-inhabitant.component';

describe('AddInhabitantComponent', () => {
  let component: AddInhabitantComponent;
  let fixture: ComponentFixture<AddInhabitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInhabitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInhabitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
