/**
 * @file mongo-db.spec.ts
 * @description This file contains contains unit test cases for  mongo-db.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import mongoose from "mongoose";
import { DBConnectivity } from "../../../src/common/utils/mongo-db";

jest.mock("mongoose");
describe("DBConnectivity", () => {
  it("should throw error while connecting with database", async () => {
    jest.clearAllMocks();
    const mockUri = "mongodb://localhost:27017/templateDB";
    jest.mock("mongoose", () => ({
      connect: jest.fn().mockRejectedValue(new Error("error")),
    }));
    await DBConnectivity.connectToMongo();
    expect(mongoose.connect).toHaveBeenCalledWith(mockUri);
    jest.clearAllMocks();
  });

  it("should connect to MongoDB with the provided URI", async () => {
    const mockUri = "mongodb://localhost:27017/templateDB";
    process.env.MONGO_URI = mockUri;
    mongoose.connect = jest.fn().mockResolvedValue({});
    await DBConnectivity.connectToMongo();
    expect(mongoose.connect).toHaveBeenCalledWith(mockUri);
    jest.clearAllMocks();
  });
});
