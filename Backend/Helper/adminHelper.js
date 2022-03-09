import expressAsyncHandler from "express-async-handler";
import userModels from '../database_modals/UserModel.js'

const UserData =expressAsyncHandler(async (req,res)=>{

    const usersData = await userModels.find({})
    res.json(usersData)

});
const userEdit = expressAsyncHandler(async(req,res)=>{
    console.log(req.params.id,"********");

    const userDetails = await userModels.findById(req.params.id)
    res.json(userDetails)
})
const editUser = expressAsyncHandler(async(req,res)=>{
    console.log(req.body);
    const user = await userModels.findById(req.body.userId)
    console.log(user);
    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email
      const updatedUser = await user.save()
      res.json({messege:"userEdit Success"})
    }

});
const deleteUser = expressAsyncHandler(async(req,res)=>{
    console.log(req.body,"*********************98768465");
    if(req.body.userId){

        await userModels.deleteOne({_id:req.body.userId})
        res.json({maessege:"User Deleted"})
    }else{
        res.json({messege:"this user not available"})
    }
})
export {UserData,userEdit,editUser,deleteUser};
