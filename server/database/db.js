import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-sc3zvib-shard-00-00.bkgsmd6.mongodb.net:27017,ac-sc3zvib-shard-00-01.bkgsmd6.mongodb.net:27017,ac-sc3zvib-shard-00-02.bkgsmd6.mongodb.net:27017/?ssl=true&replicaSet=atlas-20blby-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
