import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { User } from '@prisma/client';


@Controller('/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<User> {
    const usuarioEntity = new Usuario();
    usuarioEntity.nome = createUsuarioDto.nome;
    usuarioEntity.matricula = createUsuarioDto.matricula;
    usuarioEntity.email = createUsuarioDto.email;
    usuarioEntity.cpf = createUsuarioDto.cpf;

    return this.usuarioService.create(usuarioEntity);
  }

  // @Get()
  // findAll() {
  //   return this.usuarioService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usuarioService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuarioService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuarioService.remove(+id);
  // }
}
