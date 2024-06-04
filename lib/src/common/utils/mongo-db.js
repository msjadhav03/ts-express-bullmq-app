"use strict";
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnectivity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config({ path: process.env.PWD + "/.env" });
const MONGO_URI = process.env.MONGO_URI;
class DBConnectivity {
}
exports.DBConnectivity = DBConnectivity;
_a = DBConnectivity;
/**
 * @function connectToMongo
 * @description Function concern to connect to MongoDB
 * @returns connection instance or A error response
 */
DBConnectivity.connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(MONGO_URI);
        console.log("[mongodb] Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
});
