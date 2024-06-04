"use strict";
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
const dotenv_1 = __importDefault(require("dotenv"));
const bullmq_1 = require("bullmq");
const api_1 = require("@bull-board/api");
const bullMQAdapter_1 = require("@bull-board/api/bullMQAdapter");
const express_1 = require("@bull-board/express");
const serverAdapter = new express_1.ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");
const redisOptions = {
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    },
};
const createQueue = (queuesList) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queues = yield queuesList
            .map((qs) => new bullmq_1.Queue(qs, redisOptions))
            .map((q) => new bullMQAdapter_1.BullMQAdapter(q));
        return queues;
    }
    catch (error) {
        console.log(error);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    // Define the Redis connection options
    // Create a new queue with the Redis connection options
    const queuesList = ["Daily Mail Queue", "Daily Upload Queue"];
    const queues = yield queuesList
        .map((qs) => new bullmq_1.Queue(qs, redisOptions))
        .map((q) => new bullMQAdapter_1.BullMQAdapter(q));
    queuesList.forEach((queueData) => {
        new bullmq_1.Worker(queueData, (job) => __awaiter(void 0, void 0, void 0, function* () {
            sendDailyMail(job);
        }), {
            connection: redisOptions,
        });
    });
    const { addQueue, removeQueue, setQueues, replaceQueues } = (0, api_1.createBullBoard)({
        queues,
        serverAdapter: serverAdapter,
    });
}))();
const sendDailyMail = (job) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        setTimeout(() => {
            console.log("Job completed");
        }, 5000);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = serverAdapter;
