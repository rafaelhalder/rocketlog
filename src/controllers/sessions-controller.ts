import { Request,Response } from "express";
import { AppError } from "@/utils/AppError";
import {authConfig} from "@/configs/auth"
import {prisma} from "@/database/prisma";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import {z} from "zod";

class SessionsController{
    async create(request: Request, response: Response){
        
        const bodySchema = z.object({   
            email: z.string().email(),
            password: z.string().min(6)
        })

        const {email,password} = bodySchema.parse(request.body);
        const user = await prisma.user.findFirst({
            where: {email}
        })

        if(!user){
            throw new AppError("Email or password incorrect",401)
        }

        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new AppError("Email or password incorrect",401)
        }

        const {expiresIn,secret} = authConfig.jwt

        const token = jwt.sign({role: user.role ?? "customer"}, secret,{subject: user.id,expiresIn})

        const {password: hashedPasssword,...userWithoutPassword} = user;

        return response.json({token, user: userWithoutPassword})
    }
}

export {SessionsController}
