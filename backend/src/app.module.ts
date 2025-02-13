import { CursoFicModule } from './modules/cursoFic.module';
import { TurmaModule } from './modules/turma.module';
import { UsuarioModule } from './modules/usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CursoFicModule,
    TurmaModule,
    CursoFicModule,
    UsuarioModule,
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/crudDB?authSource=admin')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
