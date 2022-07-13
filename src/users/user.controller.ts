import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':userId')
  getUser(@Param('userId') userid: string) {
    return this.userService.getUser(userid);
  }

  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
  ) {
    const userId = this.userService.insertUser(name, age, surname, email);
    return {
      id: userId,
      name: name,
      age: age,
      surname: surname,
      email: email,
    };
  }

  @Put('userId')
  updateUser(
    @Param('userId') userId: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(userId, name, age, surname, email);
  }
}
