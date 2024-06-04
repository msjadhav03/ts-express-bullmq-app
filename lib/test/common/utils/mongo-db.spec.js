"use strict";
/**
 * @file mongo-db.spec.ts
 * @description This file contains contains unit test cases for  mongo-db.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_db_1 = require("../../../src/common/utils/mongo-db");
jest.mock("mongoose");
describe("DBConnectivity", () => {
    it("should throw error while connecting with database", () => __awaiter(void 0, void 0, void 0, function* () {
        jest.clearAllMocks();
        const mockUri = "mongodb://localhost:27017/templateDB";
        jest.mock("mongoose", () => ({
            connect: jest.fn().mockRejectedValue(new Error("error")),
        }));
        yield mongo_db_1.DBConnectivity.connectToMongo();
        expect(mongoose_1.default.connect).toHaveBeenCalledWith(mockUri);
        jest.clearAllMocks();
    }));
    it("should connect to MongoDB with the provided URI", () => __awaiter(void 0, void 0, void 0, function* () {
        const mockUri = "mongodb://localhost:27017/templateDB";
        process.env.MONGO_URI = mockUri;
        mongoose_1.default.connect = jest.fn().mockResolvedValue({});
        yield mongo_db_1.DBConnectivity.connectToMongo();
        expect(mongoose_1.default.connect).toHaveBeenCalledWith(mockUri);
        jest.clearAllMocks();
    }));
});
