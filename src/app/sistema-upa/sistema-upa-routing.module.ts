import { Routes } from '@angular/router';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento';
import { EditarAtendimentoComponent } from './editar-atendimento';
import { ListarAtendimentosComponent } from './listar-atendimentos';

export const UPARoutes: Routes = [
    {
        path: 'atendimento',
        redirectTo: 'atendimento/listar'
    },
    {
        path: 'atendimento/listar',
        component: ListarAtendimentosComponent
    },
    {
        path: 'atendimento/cadastrar',
        component: CadastrarAtendimentoComponent
    },
    {
        path: 'atendimento/editar/:id',
        component: EditarAtendimentoComponent
    }
];