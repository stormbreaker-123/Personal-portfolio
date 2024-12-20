const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
 .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology:true})
 .then(() => console.log("MongoDB connected"))
 .catch((err)=> console.log("MongoDB not connected : ", err));
 
const ContactRoutes = require("./routes/ContactRoutes");
app.use("/api/contact", ContactRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
