import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVeiculoComponent } from './veiculo.component';

describe('CadastrarVeiculoComponent', () => {
  let component: CadastrarVeiculoComponent;
  let fixture: ComponentFixture<CadastrarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
