import mongoose from "mongoose";
import dns from "node:dns";

import { DB_NAME } from "../constant.js";

// Ensure DNS resolution succeeds when local DNS servers refuse SRV lookups
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async() => {
  try {
    const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("MongoDB Connection Failed : ",error)
    process.exit(1)
  }
}

export default connectDB