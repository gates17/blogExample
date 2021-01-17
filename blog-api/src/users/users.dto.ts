import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class UsersDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsDate()
  date_created: Date;

  @IsBoolean()
  active: boolean;
}

