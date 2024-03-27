import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', (err) => {
            console.log('MongoDb connection error: ' + err);
            process.exit();
        })
    } catch(error){
        console.log("DB connection error");
        console.log(error);    
    }
}