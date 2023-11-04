import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpException, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { initModels } from 'src/models/init-models';
import { connect } from 'src/models/connect';

@ApiTags("user")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  private model = initModels(connect);

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @HttpCode(200)
  @Get()
  async findAll() {
    try {
      let data = await this.model.users.findAll();

      // throw new NotFoundException ({statusCode:404, mess:"Sai email,.."})

      return data;
    }
    catch(exce) {
      // 500
      // throw new HttpException("Lỗi ...",500);
      throw new InternalServerErrorException("lỗi ...")
    }


  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
