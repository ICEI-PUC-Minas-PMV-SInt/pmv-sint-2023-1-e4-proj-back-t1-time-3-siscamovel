import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSiscmComponent } from './hello-siscm.component';

describe('HelloSiscmComponent', () => {
  let component: HelloSiscmComponent;
  let fixture: ComponentFixture<HelloSiscmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloSiscmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloSiscmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
