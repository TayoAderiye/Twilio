import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwiliooModule } from './twilioo/twilioo.module';

@Module({
  imports: [TwiliooModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
