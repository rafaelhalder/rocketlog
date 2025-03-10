import { Router } from "express";
import { usersRouters } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { deliveriesRoutes } from "./deliveries-routes";
const routes = Router();
routes.use('/users', usersRouters);
routes.use('/sessions', sessionsRoutes);
routes.use('/deliveries', deliveriesRoutes);
export { routes };