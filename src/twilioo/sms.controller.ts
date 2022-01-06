import { Body, Controller, Post } from '@nestjs/common';
import { sendSmsDto } from 'src/Dtos/sendSms.dto';
import { json } from 'stream/consumers';
import { SmsService } from './sms.service';

@Controller('api/sms')
export class SmsController {

    constructor(private smsService: SmsService){}


    @Post()
    async sendSms(@Body() sms: sendSmsDto)
    {
        await this.smsService.sendSMS(sms)
        
        return JSON.stringify({
            success: true,
            message: "Message Sent",

        })
    }
}
