import { Router } from "express";
import {
  getUsers,
  postUser,
  getUser,
  patchUser,
  deleteUser,
} from "../../controllers/userController.js";
const router = Router();

router.get("/", getUsers);

router.post("/", postUser);

router.get("/:userId", getUser);

router.patch("/:userId", patchUser);

router.delete("/:userId", deleteUser);

export default router;
