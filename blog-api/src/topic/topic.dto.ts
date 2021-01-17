import {  IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { IsNull } from 'typeorm';

export class TopicDTO {
  @IsString()
  name: string;

  @IsDate()
  date_created: Date;

  date_updated: Date;

  status: boolean;
}
