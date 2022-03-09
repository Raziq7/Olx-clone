import express from 'express'
import {registerHandle} from '../Helper/userHelper.js'
import {LoginHandle} from '../Helper/userHelper.js'

const router=express.Router()


router.route('/').post(registerHandle)

router.route('/verifyLogin').post(LoginHandle)

export default router