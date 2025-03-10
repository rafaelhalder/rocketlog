import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveries-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller";
const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();
const deliveriesStatusController = new DeliveriesStatusController();
deliveriesRoutes.use(ensureAuthenticated,verifyUserAuthorization(["sale"]));
deliveriesRoutes.patch("/:id/status", deliveriesStatusController.update);
deliveriesRoutes.post("/", deliveriesController.create);

export {deliveriesRoutes}