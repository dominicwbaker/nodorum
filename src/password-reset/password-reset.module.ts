import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerService } from '@nest-modules/mailer';
import { UserEntity } from 'src/user/user.entity';
import { PasswordResetEntity } from './password-reset.entity';
import { PasswordResetController } from './password-reset.controller';
import { PasswordResetService } from './password-reset.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PasswordResetEntity])],
  controllers: [PasswordResetController],
  providers: [PasswordResetService, ConfigService, MailerService],
})
export class PasswordResetModule {}
