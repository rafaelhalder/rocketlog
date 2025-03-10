import { Request,Response,NextFunction } from "express";

import { AppError } from "@/utils/AppError";

export function verifyUserAuthorization(role: string[]){
  return (request: Request, response: Response, next: NextFunction) => {

    if (!request.user) {
      throw new AppError("User not found", 401);
    }
    
    if(!role.includes(request.user.role)){
      throw new AppError("Unauthorized", 401);

    }

    return next();
  };
}