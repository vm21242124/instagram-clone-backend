import express from "express";
import { follow, getUser, unfollowUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.put('/follow/:id',follow)
router.put('/unfollow/:id',unfollowUser)

export default router;
