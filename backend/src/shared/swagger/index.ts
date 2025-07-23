import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

export function configureSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Quiz API')
    .setDescription('Quiz API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync('swagger.json', JSON.stringify(document, null, 2));
  SwaggerModule.setup('api', app, document);
}
