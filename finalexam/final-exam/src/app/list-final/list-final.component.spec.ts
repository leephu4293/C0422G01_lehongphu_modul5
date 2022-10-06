import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinalComponent } from './list-final.component';

describe('ListFinalComponent', () => {
  let component: ListFinalComponent;
  let fixture: ComponentFixture<ListFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
