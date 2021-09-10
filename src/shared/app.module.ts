import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthcheckController } from 'src/healthcheck/healthcheck.controller';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/shared/config/.${process.env.NODE}.env`,
    }),
    TerminusModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: process.env.NODE === 'local' ? true : false, // SHOULD NOT BE USED IN PROD AND STAGING
    }),
    UsersModule
  ],
  controllers: [AppController, HealthcheckController],
  providers: [AppService],
})
export class AppModule { }
