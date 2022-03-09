import express from 'express'
const app=express();
import userRouter from './Router/user.js'
import adminRouter from './Router/admin.js'
import connectDb from './config/connect.js'
import cors from 'cors'
import {errorHandler,notFound} from './Midleware/ErrorMiddleware.js'
connectDb()
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200
}

app.use(express.json())

app.use(cors(corsOptions))
app.use('/admin',adminRouter)
app.use('/',userRouter)

app.use(notFound)
app.use(errorHandler)


app.listen(4000,()=>{console.log("server is running");})