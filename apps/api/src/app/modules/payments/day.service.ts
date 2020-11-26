import { Injectable } from '@nestjs/common';
import * as daysj from 'dayjs';
@Injectable()
export class DayService {
    dayjs(args?): daysj.Dayjs {
        return daysj(args);
    }
}