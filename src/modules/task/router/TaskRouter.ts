import { Router } from "express";
const TaskRouter:Router = Router();

import * as TaskController from "../controllers/index.ts";

TaskRouter.post("/", (req,res)=> TaskController.createTaskController.handle(req,res));
TaskRouter.get("/", (req,res)=> TaskController.findAllTaskController.handle(res));
TaskRouter.get("/:id", (req,res)=> TaskController.findByIdTaskController.handle(req,res));
TaskRouter.get("/email/:email", (req,res)=> TaskController.findByEmailTaskController.handle(req,res));
TaskRouter.delete("/:id", (req,res)=> TaskController.deleteTaskController.handle(req,res));

export default TaskRouter;