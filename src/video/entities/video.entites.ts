import { ApiProperty } from "@nestjs/swagger"

export type videoType = {
    video_id: number,
    video_name: string,
    thumbnail: string,
    description: string,
    views: number,
    source: string,
    user_id: number,
    type_id: number,
    video_type: typeVideo
}

export type typeVideo = {
    type_id: number,
    type_name: string
}

export class UploadType {
    @ApiProperty({ type: String, format: "binary" })
    file: any
}
