import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

//const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')


@Injectable()
export class DayService {
    createDay(args?): dayjs.Dayjs {
        return dayjs(args)

        // This is how each we can replace the datetime package
        // return zonedTimeToUtc(args, 'Europe/London')
    }
}