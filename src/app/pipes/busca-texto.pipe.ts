import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscaTexto'
})
export class BuscaTextoPipe implements PipeTransform {

  transform(valor: any, ...args: any): any {
    if (!valor) return null;
    if (!args) return valor;

    if (typeof valor === 'string') {
      args = args.toLowerCase();
    }
    
    return valor.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
