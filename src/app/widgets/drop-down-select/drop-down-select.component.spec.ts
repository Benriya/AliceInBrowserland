import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownSelectComponent } from './drop-down-select.component';

describe('DropDownSelectComponent', () => {
  let component: DropDownSelectComponent;
  let fixture: ComponentFixture<DropDownSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
