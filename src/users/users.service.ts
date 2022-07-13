import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private users: User[] = [];

  getUsers() {
    return [...this.users];
  }

  getUser(id: string) {
    return this.getUserById(id);
  }

  insertUser(name: string, age: number, surname: string, email: string) {
    const id = uuidv4();
    const newUser = new User(id, name, age, surname, email);
    this.users.push(newUser);
    return id;
  }

  updateUser(
    id: string,
    name: string,
    age: number,
    surname: string,
    email: string,
  ) {
    const [targetUser, index] = this.getUserById(id);
    const nup = { ...targetUser, name, age, surname, email };
    const newUser = new User(id, nup.name, nup.age, nup.surname, nup.email);
    this.users[index] = newUser;
    return newUser;
  }

  private getUserById(id: string): [User, number] {
    const index = this.users.find((u) => u.id == id);
    return [this.users[Number(index)], Number(index)];
  }

  deleteUser(userId: string) {
    const [_, index] = this.getUserById(userId);
    this.users.splice(index, 1);
  }
}
