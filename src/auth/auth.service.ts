import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) { }

    login() {
        // check email trùng

        // sai email

        // sai pass
        let token = this.jwtService.sign(
            {
                data: { user_id: 13, fullName: "abc", role: "USER" }
            }, {
            expiresIn: "60m", secret: "BIMAT"
        });

        return token;
    }


    signUp() {
        // check email trùng

        // mã hóa pass
        // prisma.user.create({data: infoUser})
        // model.user.create(infoUser)
    }
}



// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt