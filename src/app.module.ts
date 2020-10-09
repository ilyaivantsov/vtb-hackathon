import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { User } from './db/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: `./data/data.sqlite`,
      entities: [User],
      synchronize: true,
    }),
    DbModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
