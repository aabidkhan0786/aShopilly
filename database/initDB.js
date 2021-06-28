import mongoose from "mongoose"


const initDB = () => {
    if(mongoose.connections[0].readyState){
        console.log("Already connected to db!")
        return
    }
   mongoose.connect(process.env.MONGO_URI,{
       useNewUrlParser:true, useUnifiedTopology:true
   })
   mongoose.connection.on('connected',()=>{
       console.log("connected to db!!");
   })
   mongoose.connection.on('error',(err)=>{
       console.log("error on connection with db : ", err);
   })
}

export default initDB
