import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaeComponent } from './comparae.component';

describe('ComparaeComponent', () => {
  let component: ComparaeComponent;
  let fixture: ComponentFixture<ComparaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
