import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAdminComponent } from './admin.component';

describe('CadastrarAdminComponent', () => {
  let component: CadastrarAdminComponent;
  let fixture: ComponentFixture<CadastrarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
