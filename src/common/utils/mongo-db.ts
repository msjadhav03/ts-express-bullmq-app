/**
 * @file mongo-db.ts
 * @description This file contains code of mongodb connectivity
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires mongoose
 * @requires dotenv
 */

import mongoose from "mongoose";

require("dotenv").config({ path: process.env.PWD + "/.env" });

const MONGO_URI: any = process.env.MONGO_URI;

export class DBConnectivity {
  /**
   * @function connectToMongo
   * @description Function concern to connect to MongoDB
   * @returns connection instance or A error response
   */
  static connectToMongo = async () => {
    try {
      mongoose.connect(MONGO_URI);
      console.log("[mongodb] Connected to MongoDB");
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };
}
