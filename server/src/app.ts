import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import AuthController from "./modules/auth/auth.controller";
import TasksController from "./modules/tasks/tasks.controller";
import { ApiError, ErrorHandler } from "./utils/errorHandler";

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use("/auth", AuthController);
app.use("/tasks", TasksController);

app.use(ErrorHandler)
export { app };