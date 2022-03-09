import express from 'express'
import {UserData,userEdit ,editUser,deleteUser} from '../Helper/adminHelper.js'
const router=express.Router()

router.route('/').get(UserData)
router.route('/userEdit/:id').get(userEdit)
router.route('/editUserDetail').post(editUser)
router.route('/deleteUser').post(deleteUser)


export default router