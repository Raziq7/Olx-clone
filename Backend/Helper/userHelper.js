import asyncHandler from 'express-async-handler'
import userModel from '../database_modals/UserModel.js'
// import jwt from 'jsonwebtoken'
import generatorTocen from '../util/ganerator.js'

const registerHandle = asyncHandler(async(req,res)=>{
    const {name , email , password } = req.body
    const data = await userModel.findOne({email})
    if(data){
        throw new Error('User Already Exist')
    }else{
        const data =await userModel.create({name:name , email:email , password:password})
        res.json({data,token:generatorTocen(data)})
    }
    
  
})

const LoginHandle = asyncHandler(async(req,res)=>{
    const {email , password } = req.body
    const data = await userModel.findOne({email})
    console.log(data,"*******");
    if(data){
        if(data.password === password){

            res.json({data,token:generatorTocen(data)})
        }else{
            throw new Error('Invalid Password')
        }
    }else{
 
        throw new Error('Invalid User')
    }
    
  
})
export {registerHandle,LoginHandle}