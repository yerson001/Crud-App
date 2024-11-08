import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';  // Cambié el nombre del archivo

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) {}

    findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    findOne(id: number): Promise<Usuario> {
        return this.usuarioRepository.findOne({ where: { id } });
    }

    create(usuario: Partial<Usuario>): Promise<Usuario> {
        const nuevoUsuario = this.usuarioRepository.create(usuario);
        return this.usuarioRepository.save(nuevoUsuario);
    }

    async update(id: number, datos: Partial<Usuario>): Promise<Usuario> {
        await this.usuarioRepository.update(id, datos);
        return this.usuarioRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }
}

//GET http://localhost:3000/usuarios
