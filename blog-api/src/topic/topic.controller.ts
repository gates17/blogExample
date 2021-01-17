import { LoggingInterceptor } from './../shared/logging.interceptor';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicDTO } from './topic.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('topic')
export class TopicController {
  private logger = new Logger('TopicController');
  constructor(private topicService: TopicService) {}

  @Get()
  async showAllTopics() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.topicService.showAll(),
    };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTopics(@Body() data: TopicDTO) {
    this.logger.log(JSON.stringify(data));
    return {
      statusCode: HttpStatus.OK,
      message: 'Topic added successfully',
      data: await this.topicService.create(data),
    };
  }

  @Get(':id')
  async readTopic(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.topicService.read(id),
    };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateTopic(@Param('id') id: number, @Body() data: Partial<TopicDTO>) {
    this.logger.log(JSON.stringify(data));
    return {
      statusCode: HttpStatus.OK,
      message: 'Topic update successfully',
      data: await this.topicService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteTopic(@Param('id') id: number) {
    await this.topicService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Topic deleted successfully',
    };
  }
}
