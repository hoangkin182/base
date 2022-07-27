import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transformer-interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService: ConfigService = app.get(ConfigService);
  app.useStaticAssets('../public', {
    setHeaders: (res, path, stat) => {
      res.set('Access-Control-Allow-Origin', '*');
    }
  });
  //#region  Config swagger
  const config = new DocumentBuilder()
    .setTitle(configService.get<string>('PROJECT_NAME'))
    .setDescription(
      `Api for ${configService.get<string>(
        'NODE_ENV',
      )} - v${configService.get<string>('VERSION')}`,
    )
    .setVersion(process.env.VERSION)
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //#endregion Config swagger

  // Global Interceptor
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors({
    allowedHeaders: "*",
    origin: "*"
  });
  await app.listen(process.env.PORT || 3303);
}
bootstrap();
