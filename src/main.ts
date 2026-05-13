import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { init } from '@syskoio/core';
import { instrumentExpress } from '@syskoio/plugins';

async function bootstrap() {
  await init({
    serviceName: 'my-nest-app',
    dashboard: {
      host: '0.0.0.0', // escuta em todas as interfaces do container
      port: 9999,
      password: '123', // obrigatorio se vai ficar exposto
    },
  });
  const app = await NestFactory.create(AppModule);

  instrumentExpress(app.getHttpAdapter().getInstance());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
