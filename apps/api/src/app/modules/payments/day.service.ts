import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

@Injectable()
export class DayService {
    dayjs(args?): dayjs.Dayjs {
        return dayjs(args).locale("uk")
    }
}