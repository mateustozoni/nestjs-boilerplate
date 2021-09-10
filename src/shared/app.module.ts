import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthcheckController } from 'src/healthcheck/healthcheck.controller';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '123456',
      database: 'socialcommerce-database',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true, // SHOULD NOT BE USED IN PROD AND STAGING
    }),
    UsersModule
  ],
  controllers: [AppController, HealthcheckController],
  providers: [AppService],
})
export class AppModule { }
