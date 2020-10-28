import { Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllExceptionFilter } from './common/exception-filters/any-exception.filter';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validate.pipe';
import { configService } from './config/config.service';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ItemModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
  controllers: []
})
export class AppModule {}
