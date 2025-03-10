import { Router } from "express";
import { SessionsController } from "@/controllers/sessions-controller";
import { deliveriesRoutes } from "./deliveries-routes";
import { DeliveriesController } from "@/controllers/deliveries-controller";
const sessionsRoutes = Router();
const sessionsController = new SessionsController();
const deliveriesController = new DeliveriesController();
sessionsRoutes.post("/",sessionsController.create);
deliveriesRoutes.get("/",deliveriesController.index);
export {sessionsRoutes}