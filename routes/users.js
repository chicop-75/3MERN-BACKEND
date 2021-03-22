import express from "express";
import user from "../controller/user"

const router = express.Router()
router.post('/register', user.register)
router.post('/login', user.login)

export default router
