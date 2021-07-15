import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '@user/entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from '@shared/mapper';
import { UserDto } from '@user/dto/user.dto';
import { LoginUserDto } from '@user/dto/login-user.dto';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { comparePasswords } from '@shared/utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findOne(options?: object): Promise<UserDto> {
    const user = await this.userRepo.findOne(options);
    return toUserDto(user);
  }

  async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await comparePasswords(user.password, password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return toUserDto(user);
  }

  async findByPayload({ username }: any): Promise<UserDto> {
    return await this.findOne({
      where: { username },
    });
  }

  async create(userDto: CreateUserDto): Promise<UserDto> {
    const { username, password, email } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userRepo.findOne({
      where: { username },
    });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: UserEntity = await this.userRepo.create({
      username,
      password,
      email,
    });
    await this.userRepo.save(user);
    return toUserDto(user);
  }
}
