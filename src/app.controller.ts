import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { ApiBody, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

class bodyApp {
  @ApiProperty()
  hoTen: string

  @ApiProperty()
  phone: string
}

@ApiTags("app")
@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @ApiParam({
  //   name: "id"
  // })
  // @ApiQuery({
  //   name: "email"
  // })
  // @ApiBody({
  //   type: bodyApp
  // })
  @Get("/:email")
  getHello(
    @Req() req: Request,

    @Query("id") id: string,
    @Param("email") email: string,
    @Body() body: bodyApp

  ): string {
    // params
    // query string
    // query params
    // body

    // let { id } = req.query;
    // let { email } = req.params;
    // let { hoTen, phone } = req.body;

    // req.params, req.query ,req.body

    return this.appService.getHello();
  }

  @Get("/get-number/:soA/:soB")
  getNumber(@Param("soA") soA: string, @Param("soB") soB: string): number {
    return this.appService.tinhTong(Number(soA), Number(soB));
  }

}

// entities: chứa tất cả khai báo type 
// dto: data transfer object: chứa tất cả khai báo type 

// User: 4 thuộc tính => type 4 thuộc tính
// Get User: 10 thuộc tính, loại user, comment, like,.... => type 10 tính => DTO 


// User => module, controller, service
// video => module, controller, service
// nest g resource user --no-spec