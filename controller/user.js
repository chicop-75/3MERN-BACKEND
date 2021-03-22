import {userSchema} from "../models/mongoSchema";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import mongoose from "mongoose";

const saltRounds = 10;

const users = mongoose.model('Users', userSchema)

const register = async (req, res) => {
    try {
        let emailAlreadyExist = await users.findOne({email: req.body.email})
        if (emailAlreadyExist === null) {
            const hash = await bcrypt.hash(req.body.password, saltRounds)
            const user = new users(req.body)
            user.password = hash
            res.status(200).json(await user.save())
        }else {
            res.status(409).json('Email already exist, please choose an other one')
        }
    }catch (e) {
        res.status(401).send(e)
    }
}

const login = async (req, res) => {
    try {
        const getHashPwd = await users.findOne({email: req.body.email})
        const hash = await bcrypt.compare(req.body.password, getHashPwd.password)
        if (hash) {
            res.status(200).send(
                jwt.sign({
                    email: req.body.email,
                    password: req.body.password},
                    'authorization'));
        }else {
            res.status(401).send('Failed Login ! ')
        }
    }catch (e) {
        res.status(401).send(e)
    }
}

const addCities = async (req, res) => {
    try {
        res.send('Cities added')
    }catch (e) {
        res.status(401).send(e)
    }
}
const removeCities = async (req, res) => {
    try {
        res.send('Cities Removed')
    }catch (e) {
        res.status(401).send(e)
    }
}

const findOneCity = async (req, res) => {
    try {
        res.send('City Found and displayed')
    }catch (e) {
        res.status(401).send(e)
    }
}

const findAllCities = async (req, res) => {
    try {
        res.send('Cities Found and displayed')
    }catch (e) {
        res.status(401).send(e)
    }
}

export default {register, login, addCities, removeCities, findOneCity, findAllCities}
