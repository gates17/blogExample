import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpException,
  UsePipes,
  Logger,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('users')
export class UsersController {
  private logger = new Logger('UsersController');
  constructor(private usersService: UsersService) {}

  @Get()
  async showAllUsers() {
    const data = await this.usersService.showAll();
    if (!data) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      data: data,
    };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createUsers(@Body() data: UsersDTO) {
    this.logger.log(JSON.stringify(data));
    return {
      statusCode: HttpStatus.OK,
      message: 'User added successfully',
      data: await this.usersService.create(data),
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data = await this.usersService.read(id);
    if (!data) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      data: data,
    };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
    this.logger.log(JSON.stringify(data));
    return {
      statusCode: HttpStatus.OK,
      message: 'User update successfully',
      data: await this.usersService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}
