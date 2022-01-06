import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwilioModule } from 'nestjs-twilio';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`
        }),
        TwilioModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (cfg: ConfigService) => ({
            accountSid: cfg.get('TWILIO_ACCOUNT_SID'),
            authToken: cfg.get('TWILIO_AUTH_TOKEN'),
          }),
          inject: [ConfigService],
        }),
      ],
    providers: [SmsService],
    controllers: [SmsController],
})
export class TwiliooModule {}
