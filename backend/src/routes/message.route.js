import express from "express";
const router = express.Router();
import { getUsersForSidebar, getMessages, sendMessage, deleteMessage, editMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

router.post("/:id", protectRoute, sendMessage);
router.delete("/:id", protectRoute, deleteMessage);
router.put("/:id", protectRoute, editMessage);

export default router;