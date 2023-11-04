import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, VideoModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


// @ => decorator

// localhost:8080?id=123

// yarn add prisma @prisma/client
// yarn prisma init
// update schema.prisma và .env
// yarn prisma db pull
// yarn prisma generate