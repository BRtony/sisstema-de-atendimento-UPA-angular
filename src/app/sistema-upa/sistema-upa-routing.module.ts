import { Routes } from '@angular/router';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento';

export const UPARoutes: Routes = [
    {
        path: 'cadastro',
        redirectTo: 'cadastrar'
    },
    // {
    //     path: 'tarefas/listar',
    //     component: ListarTarefaComponent
    // },
    {
        path: 'cadastrar',
        component: CadastrarAtendimentoComponent
    },
    // {
    //     path: 'tarefas/editar/:id',
    //     component: EditarTarefaComponent
    // }
];