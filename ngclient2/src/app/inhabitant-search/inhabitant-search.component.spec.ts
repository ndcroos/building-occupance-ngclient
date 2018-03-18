import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitantSearchComponent } from './inhabitant-search.component';

describe('InhabitantSearchComponent', () => {
  let component: InhabitantSearchComponent;
  let fixture: ComponentFixture<InhabitantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
