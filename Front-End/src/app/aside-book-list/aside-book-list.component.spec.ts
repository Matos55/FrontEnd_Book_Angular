import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBookListComponent } from './aside-book-list.component';

describe('AsideBookListComponent', () => {
  let component: AsideBookListComponent;
  let fixture: ComponentFixture<AsideBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
