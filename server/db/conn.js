import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config();
mongoose.connect(process.env.DB_URL,{

    useNewUrlParser: true,
    useUnifiedTopology: true
  
  }).then((result)=>{
    console.log("succesful conection to database")
  }).catch((err)=>{
    console.log(err)
  })
export default mongoose