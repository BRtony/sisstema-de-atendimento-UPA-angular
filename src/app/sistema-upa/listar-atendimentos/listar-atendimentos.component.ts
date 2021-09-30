import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Upa, UpaService } from '../shared';
import { ListarAtendimentosDataSource } from './listar-atendimentos-datasource';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrls: ['./listar-atendimentos.component.css']
})
export class ListarAtendimentosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Upa>;
  dataSource: ListarAtendimentosDataSource;
  atendimentos: Upa[]

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'sobrenome', 'priority', 'observacoes', 'botoes'];

  constructor(
    private upaService: UpaService
  ) {
    this.dataSource = new ListarAtendimentosDataSource();
  }
  ngOnInit():void {
    this.atendimentos = this.listarTodos();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  listarTodos(): Upa[] {
    return this.upaService.listarTodos();
  }

  alterarStatus(atendimento: Upa): void {
    if(confirm(`Deseja alterar o status do paciente "${atendimento.nome}"?`)){
      this.upaService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarTodos();
    } else {
      this.atendimentos = this.listarTodos();
    }
  }

  remover($event: any, atendimento: Upa): void {
    $event.preventDefault();
    if(confirm(`Deseja alterar o status de atendimento de "${atendimento.nome}"?`)){
      this.upaService.remover(atendimento.id);
      this.atendimentos = this.listarTodos();
    }
  }
}
