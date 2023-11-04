import { Injectable } from '@nestjs/common';
import { PrismaClient, video, video_comment  } from '@prisma/client';
import { videoType } from './entities/video.entites';


@Injectable()
export class VideoService {

    prisma = new PrismaClient();

    async getVideo(): Promise<videoType[]> {
        let data = await this.prisma.video.findMany({
            include:{
                video_type:true
            }
        });
        
        return data;
    }


    async createVideo(body) {


        let data = await this.prisma.video.create({ data: body });
        return data;
    }
}

// {"video_id":1,"video_name":"Introduction to Coding","thumbnail":"coding_intro.jpg","description":"Learn the basics of coding","views":1500,"source":"youtube.com","user_id":1,"type_id":2}