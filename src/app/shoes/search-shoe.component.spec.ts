import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShoeComponent } from './search-shoe.component';

describe('SearchShoeComponent', () => {
  let component: SearchShoeComponent;
  let fixture: ComponentFixture<SearchShoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
