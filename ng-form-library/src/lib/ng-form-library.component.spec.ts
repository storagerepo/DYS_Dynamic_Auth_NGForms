import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormLibraryComponent } from './ng-form-library.component';

describe('NgFormLibraryComponent', () => {
  let component: NgFormLibraryComponent;
  let fixture: ComponentFixture<NgFormLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFormLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
