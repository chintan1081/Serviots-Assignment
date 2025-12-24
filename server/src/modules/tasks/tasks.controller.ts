import { Router } from "express";
import { createTodos, deleteTodos, getAllTodos, updateTodos } from "./tasks.service";
import { JwtAuth } from "../../middleware/jwtAuth.middleware";

const router = Router();

router.use(JwtAuth)

router.get("/", getAllTodos)
router.post("/", createTodos)
router.put("/:id", updateTodos)
router.delete("/:id", deleteTodos)


export default router;