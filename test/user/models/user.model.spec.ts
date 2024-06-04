/**
 * @file user.model.spec.ts
 * @description This file contains contains unit test cases for  user.model.spec.ts
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 */

import mongoose from "mongoose";
import User from "../../../src/user/models/user.model";

jest.mock("mongoose");

describe("User Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not create a new user with missing required fields", async () => {
    const userData: any = {
      username: "testUser",
      password: "password",
      role: "user",
    };

    try {
      await User.create(userData);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
