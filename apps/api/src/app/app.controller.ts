import { Controller, Get } from '@nestjs/common';

import { Message } from '@the-burroughs-test/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
