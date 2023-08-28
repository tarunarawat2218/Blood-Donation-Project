const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();


const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');


const dbURI = process.env.DB_URI;
console.log('DB_URI:', dbURI);

// Connect to the MongoDB database
mongoose.connect(dbURI || "");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
