import { TestBed } from '@angular/core/testing';

import { ListarVeiculosService } from './listar-veiculos.service';

describe('ListarVeiculosService', () => {
  let service: ListarVeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarVeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
