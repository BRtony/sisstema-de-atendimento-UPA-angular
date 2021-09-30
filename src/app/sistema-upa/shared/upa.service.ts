import { Injectable } from '@angular/core';
import { Upa } from './upa.model';

@Injectable()
export class UpaService {
  constructor() { }

  listarTodos(): Upa[] {
    const atendimentos = localStorage['atendimentos'];
    return atendimentos ? JSON.parse(atendimentos) : [];
  }

  cadastrar(atendimento: Upa):void {
    const atendimentos = this.listarTodos();
    atendimento.id = new Date().getTime();
    atendimentos.push(atendimento);
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  buscarPorId(id: number): Upa {
    const atendimentos: Upa[] = this.listarTodos();
    return atendimentos.find(atendimento => atendimento.id === id);
  }

  atualizar(atendimento: Upa): void {
    const atendimentos: Upa[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs) => {
      if (atendimento.id === obj.id){
        objs[index] = atendimento
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  remover(id: number): void {
    let atendimentos: Upa[] = this.listarTodos();
    atendimentos = atendimentos.filter(atendimento => atendimento.id !== id);
    localStorage['atendimentos'] = JSON.stringify(atendimentos)
  }

  alterarStatus(id: number): void {
    const atendimentos: Upa[] = this.listarTodos();
    atendimentos.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].isActive = !obj.isActive;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }
}
