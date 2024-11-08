import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';  // Cambié el nombre del archivo

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],  // Asegúrate de importar la entidad Usuario
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
