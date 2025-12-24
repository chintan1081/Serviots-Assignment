import { Router } from "express";
import { loginService, logoutService, registerService } from "./auth.service";

const router = Router();

router.post("/register", registerService)
router.post("/login", loginService)
router.post("/logout", logoutService)

export default router;