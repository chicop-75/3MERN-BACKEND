import jwt from "jsonwebtoken";

const authGuard = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            req.user =jwt.verify(req.headers.authorization.split('Bearer ')[1], 'authorization')
        }
        next()
    } catch (e) {
        res.send({error : e})
    }

}

const checkUser = async (req, res, next) => {
    if (req.user) {
        next()
    }else {
        res.send('No user')
    }
}

export default {authGuard, checkUser}
