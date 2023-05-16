import { Body, Controller, Get, Render, Post } from '@nestjs/common';
import { RegistrationService } from '../service/registration.service';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
import { UpdateRegistrationDto } from '../dto/update-registration.dto';
import { PrismaClient } from '@prisma/client';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  // render registration page
  @Get()
  @Render('registration.ejs')
  root() {
    return;
  }

  // insert registration data
  @Post('insertUser')
  async insertRegistrationData(
    @Body() registrationData: CreateRegistrationDto,
  ) {
    console.log(registrationData);
    await this.registrationService.signupUser(registrationData);
    return 'Inserted!!';
  }
}
