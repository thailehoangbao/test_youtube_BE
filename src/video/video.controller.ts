import { Body, Controller, Get, Headers, HttpException, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { VideoService } from './video.service';
import { ConfigService } from '@nestjs/config';
import { UploadType, videoType } from './entities/video.entites';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';



@ApiTags("video")
@Controller('video')
export class VideoController {
  constructor(
    private readonly videoService: VideoService,
    private configSerivce: ConfigService
  ) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard("jwt"))
  @Get("/get-video")
  getVideo(@Req() req, @Headers("token") token): Promise<videoType[]> {
    // let tokenDecode = this.jwtService.decode(token)
    let tokenDecode = req.user;
    // if (tokenDecode.data.role == "ADMIN") {

      return this.videoService.getVideo();
    // } else {
    //   throw new HttpException("unauthoried", 401);
      
    // }

  }


  @Post("/create-video")
  createVideo(@Body() body) {

    return this.videoService.createVideo(body);
  }


  @ApiConsumes("multipart/form-data")
  @ApiBody({
    type: UploadType
  })
  // upload.single("file")
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: process.cwd() + "/public/img",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload-video")
  upload(@UploadedFile() file: Express.Multer.File) {

    return file;
  }

}
