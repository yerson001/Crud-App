import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';  // Cambié el nombre del archivo

@Controller('usuarios')  // Cambié el nombre de la ruta para hacerla plural, es más común en REST APIs
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    @Get()  // Método GET para obtener todos los usuarios
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get(':id')  // Ruta dinámica para obtener un usuario por ID
    findOne(@Param('id') id: string): Promise<Usuario> {
        return this.usuarioService.findOne(+id);  // Convertimos el id a número
    }

    @Post()  // Método POST para crear un nuevo usuario
    create(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @Put(':id')  // Ruta dinámica para actualizar un usuario por ID
    update(@Param('id') id: string, @Body() datos: Partial<Usuario>): Promise<Usuario> {
        return this.usuarioService.update(+id, datos);
    }

    @Delete(':id')  // Ruta dinámica para eliminar un usuario por ID
    remove(@Param('id') id: string): Promise<void> {
        return this.usuarioService.remove(+id);
    }
}
