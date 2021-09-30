import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './templates/header/header.component';
import { ListarAtendimentosComponent } from './listar-atendimentos/listar-atendimentos.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpaService } from './shared';
import { AppRoutingModule } from '../app-routing.module';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';
import { isActiveDirective } from './shared/atendimento-isActive.directive';
import { concluidoDirective } from './shared/atendimento-concluido.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    CadastrarAtendimentoComponent,
    ListarAtendimentosComponent,
    EditarAtendimentoComponent,
    isActiveDirective,
    concluidoDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    UpaService
  ]
})
export class SistemaUpaModule { }
