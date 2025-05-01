import mongoose from 'mongoose';

async function initMongo(){
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Succesful conection to Mongo");
}

export { initMongo };
