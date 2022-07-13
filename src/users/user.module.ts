import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './users.service';

@Module({
  imports: [UsersModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
