import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { CreateLoginDto } from '../dto/create-login.dto';
import { UpdateLoginDto } from '../dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @Render('login')
  root() {
    return;
  }
}
