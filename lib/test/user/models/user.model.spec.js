"use strict";
/**
 * @file user.model.spec.ts
 * @description This file contains contains unit test cases for  user.model.spec.ts
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
const user_model_1 = __importDefault(require("../../../src/user/models/user.model"));
jest.mock("mongoose");
describe("User Model", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should not create a new user with missing required fields", () => __awaiter(void 0, void 0, void 0, function* () {
        const userData = {
            username: "testUser",
            password: "password",
            role: "user",
        };
        try {
            yield user_model_1.default.create(userData);
        }
        catch (error) {
            expect(error).toBeDefined();
        }
    }));
});
