import { Request, Response } from "express";
import { Tasks } from "../../database/models/Tasks";
import { ApiError } from "../../utils/errorHandler";
import mongoose from "mongoose";

export async function getAllTodos(req: Request, res: Response) {
    const userId = (req as any).userId;
    if (!userId) throw new ApiError(401, "User id not found");

    const todos = await Tasks.find({ userId });
    if (!todos) throw new ApiError(404, "Todos not found");

    res.status(200).json({
        success: true,
        message: "Found all todos",
        data: todos,
    })
}

export async function createTodos(req: Request, res: Response) {
    const { title, description, status } = req.body;

    const userId = new mongoose.Types.ObjectId((req as any).userId);
    const tasks = await Tasks.insertOne({
        title,
        description,
        status,
        userId
    })

    res.status(200).json({
        success: true,
        message: "created todo",
        data: tasks,
    })
}

export async function updateTodos(req: Request, res: Response) {
    const { title, description, status } = req.body;

    const todoId: string = req.params.id;
    if (!todoId) throw new ApiError(401, "todos id not found");

    const userId = new mongoose.Types.ObjectId((req as any).userId);
    const tasks = await Tasks.updateOne({ _id: todoId }, {
        title,
        description,
        status,
        userId
    })

    res.status(200).json({
        success: true,
        message: "updated todo",
        data: tasks,
    })
}

export async function deleteTodos(req: Request, res: Response) {
    const todoId: string = req.params.id;
    if (!todoId) throw new ApiError(401, "todos id not found");

    const tasks = await Tasks.deleteOne({ _id: todoId });
    res.status(200).json({
        success: true,
        message: "deleted todo",
        data: tasks,
    })
}