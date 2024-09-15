import app from "./app.js";
import databaseConnection from "./utils/db.js";


// database connection
databaseConnection();

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})