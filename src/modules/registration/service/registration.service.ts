import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateRegistrationDto } from '../dto/create-registration.dto';
const prisma = new PrismaClient();

@Injectable()
export class RegistrationService {
  async signupUser(registrationData: CreateRegistrationDto) {
    try {
      await prisma.user.create({
        data: {
          ...registrationData,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
