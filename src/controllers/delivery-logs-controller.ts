import { Request,Response } from "express";
import {z} from "zod";
import {prisma} from "@/database/prisma"
import { AppError } from "@/utils/AppError";
class DeliveryLogsController {
    async create(request: Request, response: Response) {
      const bodySchema = z.object({
        delivery_id: z.string().uuid(),
        description: z.string(),
      });
      const {delivery_id, description } = bodySchema.parse(request.body);
      const delivery = await prisma.delivery.findUnique({
        where: {
          id: delivery_id,
        },
      });
      if(!delivery){
        throw new AppError("Delivery not found",404)
      }

      if(delivery.status === "delivered"){
        throw new AppError("This order already delivered",401)
      }
      if(delivery.status === "processing"){
        throw new AppError("Change status to shipped",401)
      }

      await prisma.deliveryLog.create({
        data: {
          description,
          deliveryId: delivery_id,
        },
      })

        return response.status(201).json({ message: "Delivery log created successfully" });
    }

    async show(request: Request, response: Response){
      const paramsSchema = z.object({
        delivery_id: z.string().uuid(),
      })
      const {delivery_id} = paramsSchema.parse(request.params);
    
      const delivery = await prisma.delivery.findUnique({
        where: {
          id: delivery_id,
        },
        include: {
          logs: true,
          user:{
            select:{
              id:true,
              name:true  
            }
          }
        },

      })

      if(request.user?.role === "customer" && request.user.id !== delivery?.userId){
        throw new AppError("You are not authorized to view this delivery log",401)
      }

      return response.json(delivery)
    
    }
  }

  export { DeliveryLogsController };