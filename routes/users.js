import express from "express";
import user from "../controller/user"
import authGuard from "../middleware/authGuard";


const router = express.Router()

// User
router.post('/register', user.register)
router.post('/login', user.login)


// User's favorites cities
router.get('/cities/:id', authGuard.checkUser, user.findAllCities)
router.post('/cities/:id', authGuard.checkUser, user.addCities)
router.delete('/cities/:id', authGuard.checkUser, user.removeCities)


export default router
