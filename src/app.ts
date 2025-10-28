import express from "express";
import type { Express } from "express";
const app:Express = express();

import userRouter from "../src/modules/user/router/User.router.ts";
import TaskRouter from "./modules/task/router/TaskRouter.ts";

app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", TaskRouter);

export default app;