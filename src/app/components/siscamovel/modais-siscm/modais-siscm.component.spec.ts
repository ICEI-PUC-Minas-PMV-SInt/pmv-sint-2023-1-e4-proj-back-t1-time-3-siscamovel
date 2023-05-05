import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaisSiscmComponent } from './modais-siscm.component';

describe('ModaisSiscmComponent', () => {
  let component: ModaisSiscmComponent;
  let fixture: ComponentFixture<ModaisSiscmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaisSiscmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaisSiscmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
