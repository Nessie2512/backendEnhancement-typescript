import { Router } from "express";
const UserRouters:Router = Router();

import * as UserController from "../controllers/index.ts";

UserRouters.post("/", (req,res)=> UserController.createUserController.handle(req,res));
UserRouters.get("/", (req,res)=> UserController.findAllUserController.handle(res));
UserRouters.get("/email/:email", (req,res)=> UserController.findByEmailUserController.handle(req,res));
UserRouters.get("/:id", (req,res)=> UserController.findByIdUserController.handle(req,res));
UserRouters.delete("/:id", (req,res)=> UserController.deleteUserController.handle(req,res));
UserRouters.put("/:id", (req,res)=> UserController.updateUserController.handle(req,res));

export default UserRouters;

