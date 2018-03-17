import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InhabitantImageComponent } from './inhabitant-image.component';

describe('InhabitantImageComponent', () => {
  let component: InhabitantImageComponent;
  let fixture: ComponentFixture<InhabitantImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhabitantImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhabitantImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
