import { TurmaService } from './../shared/services/turma.service';
import { VerTurmaModule } from './ver-turma/ver-turma.module';
import { MaterialAngular } from './../shared/style/material-angular.module';
import { ListarModule } from './listar/listar.module';
import { CadastrarModule } from './cadastrar/cadastrar.module';
import { TurmasRoutingModule } from './turmas.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmasComponent } from './turmas.component';

@NgModule({
  imports: [
    CommonModule,
    TurmasRoutingModule,
    CadastrarModule,
    ListarModule,
    VerTurmaModule,
    MaterialAngular
  ],
  declarations: [TurmasComponent],
  providers:[TurmaService],
  exports:[
    TurmasComponent
  ]
})
export class TurmasModule { }
