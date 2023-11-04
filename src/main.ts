import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static("."))

  const config = new DocumentBuilder().setTitle("Đây không có gì").addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/swagger", app, document); // endpoint vô UI swagger

  await app.listen(8080);
}
bootstrap();
// yarn add @nestjs/swagger swagger-ui-express

// yarn start => node index.js
// yarn start:dev => nodemon index.js

// module: liên kết controller và service lại với nhau, liên kết module của đối tượng khác
// controller: tạo API
// service: xử lý chức năng, logic, truy CSDL