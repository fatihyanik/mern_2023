import mongoose from 'mongoose'

const Connection = async (username, password) => {
    const URL = `mongodb://fatih:19811988@ac-wixblc0-shard-00-00.574ok1o.mongodb.net:27017,ac-wixblc0-shard-00-01.574ok1o.mongodb.net:27017,ac-wixblc0-shard-00-02.574ok1o.mongodb.net:27017/?ssl=true&replicaSet=atlas-4ru41m-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error);
    }
}

export default Connection;