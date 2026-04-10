import { Router } from "express";
import {
    insertUser,
    selectUsers,
    selectUser,
    updateUser,
    deleteUser
} from "./Controler/User.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        statusCode: 200,
        message: "Api Rodando",
    });
});

router.get("/users", selectUsers);
router.get("/user", selectUser);
router.post("/user", insertUser);
router.put("/user", updateUser);
router.delete("/user", deleteUser);

export default router;
