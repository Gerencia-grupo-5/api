import mongoose from 'mongoose';

async function initMongo(){
    await mongoose.connect(process.env.MONGO_URI!, {dbName: "hackaton"});

    console.log("Succesful conection to Mongo");
}

export { initMongo };
