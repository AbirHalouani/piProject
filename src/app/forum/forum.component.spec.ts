import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { forumComponent } from './forum.component';

describe('forumComponent', () => {
  let component: forumComponent;
  let fixture: ComponentFixture<forumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ forumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(forumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
