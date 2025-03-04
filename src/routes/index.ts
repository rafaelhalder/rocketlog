import { Router } from "express";
import { usersRouters } from "./users-routes";
const routes = Router();
routes.use('/users', usersRouters);
export { routes };