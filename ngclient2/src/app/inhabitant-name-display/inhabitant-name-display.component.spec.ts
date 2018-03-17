import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitantNameDisplayComponent } from './inhabitant-name-display.component';

describe('InhabitantNameDisplayComponent', () => {
  let component: InhabitantNameDisplayComponent;
  let fixture: ComponentFixture<InhabitantNameDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitantNameDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitantNameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
