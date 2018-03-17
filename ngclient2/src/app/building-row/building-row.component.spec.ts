import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingRowComponent } from './building-row.component';

describe('BuildingRowComponent', () => {
  let component: BuildingRowComponent;
  let fixture: ComponentFixture<BuildingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
