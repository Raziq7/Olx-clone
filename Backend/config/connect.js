import mongoose from 'mongoose'
const connectDb = async ()=>{
try{

    await mongoose.connect('mongodb://localhost:27017/test');

    console.log("database connect");
}
catch(err){
    console.log("Error",err);
}
}
export default connectDb
