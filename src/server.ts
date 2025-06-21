import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
let server: Server;
const PORT = 5000;

const main = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://aman:nmEHD6Zf7ojmZIho@cluster0.l8ooqis.mongodb.net/library-api?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB using mongoose!!!");

    server = app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
