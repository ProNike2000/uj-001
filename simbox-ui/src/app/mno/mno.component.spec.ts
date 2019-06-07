import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnoComponent } from './mno.component';

describe('MnoComponent', () => {
  let component: MnoComponent;
  let fixture: ComponentFixture<MnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
