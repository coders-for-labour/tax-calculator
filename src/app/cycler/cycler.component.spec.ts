import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclerComponent } from './cycler.component';

describe('CyclerComponent', () => {
  let component: CyclerComponent;
  let fixture: ComponentFixture<CyclerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
