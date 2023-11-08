import mongoose from "../db/conn.js";

const orderSchema = mongoose.Schema({
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    phone :{
        type: Number,
    },
    message :{  
        type: String,
    },
    Image :{
        type: String,       
    },
});

export default orderSchema;