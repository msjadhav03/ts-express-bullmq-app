"use strict";
/**
 * @file index.ts
 * @description This file contains main server code
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 * @requires dotenv
 * @requires swagger-js
 * @requires swagger-ui-express
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
exports.bootstrapServer = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const template_routes_1 = __importDefault(require("./template/routes/template.routes"));
const user_routes_1 = __importDefault(require("./user/routes/user.routes"));
const mongo_db_1 = require("../src/common/utils/mongo-db");
const constants_1 = require("./common/config/constants");
const auth_middleware_1 = require("./common/middleware/auth/auth.middleware");
const cors_1 = __importDefault(require("cors"));
const bullmq_1 = __importDefault(require("./bullmq"));
dotenv_1.default.config();
const bootstrapServer = () => {
    const specs = (0, swagger_jsdoc_1.default)(constants_1.CustomConstant.SWAGGER_CONFIG);
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use(`${constants_1.CustomConstant.SWAGGER_BASE_URI}`, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, constants_1.CustomConstant.SWAGGER_UI_OPTIONS));
    app.use("/", user_routes_1.default);
    app.use("/admin/queues", bullmq_1.default.getRouter());
    app.use(auth_middleware_1.Auth.authenticateUser);
    app.use("/", template_routes_1.default);
    app.listen(process.env.PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`[Node.js] Server started at PORT ${process.env.PORT} `);
        yield mongo_db_1.DBConnectivity.connectToMongo();
    }));
};
exports.bootstrapServer = bootstrapServer;
process.on("SIGINT" || "SIGTERM", () => {
    process.exit(0);
});
(0, exports.bootstrapServer)();
