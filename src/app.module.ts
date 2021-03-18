import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, SubscriberModule, AccountModule, AuthModule, UsersModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
