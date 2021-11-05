import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { functionalLogger } from 'middleware/functionalLogger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(functionalLogger)
      .exclude({ path: 'dogs', method: RequestMethod.GET }, 'dogs/(.*)')
      .forRoutes(DogsController);
  }
}
