import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';
import { sendSmsDto } from 'src/Dtos/sendSms.dto';

@Injectable()
export class SmsService {
    
    constructor(@InjectTwilio() private readonly client: TwilioClient,
                private config: ConfigService) {}


    async sendSMS(sms: sendSmsDto)
    {
        await this.twolio(sms.body, sms.to)

    }   
    


    private async twolio (body, to)
    {   
        
        await this.client.messages.create({
            body,
            from: this.config.get('TWILIO_PHONE_NUMBER'),
            to
        }).then(message => console.log(message))

    }
        
}
