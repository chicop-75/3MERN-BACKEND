import express from "express";
import user from "../controller/user"

const router = express.Router()

// User
router.post('/register', user.register)
router.post('/login', user.login)

// User's favorites cities
router.get('/:id/cities', user.findAllCities)
router.post('/:id', user.addCities)
router.delete('/:id', user.removeCities)



export default router
