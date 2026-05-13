import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { init } from '@syskoio/core';
import { instrumentExpress } from '@syskoio/plugins';

async function bootstrap() {
  await init({ serviceName: 'my-nest-app' });
  const app = await NestFactory.create(AppModule);

  instrumentExpress(app.getHttpAdapter().getInstance());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
