import mongoose from "mongoose";

const url = process.env.MONGO_URL;
const databaseConnection = async () => {
    try {
        await mongoose.connect(url).then((data) => {
            console.log(`Database connected with ${data.connection.host}`);
        })
    } catch (error) {
        console.log("Error connecting database", error.message);
        setTimeout(databaseConnection, 5000);
    }
}

export default databaseConnection