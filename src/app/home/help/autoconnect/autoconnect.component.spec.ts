import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoconnectComponent } from './autoconnect.component';

describe('AutoconnectComponent', () => {
  let component: AutoconnectComponent;
  let fixture: ComponentFixture<AutoconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
