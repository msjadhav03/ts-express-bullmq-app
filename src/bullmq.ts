import express from "express";
import dotenv from "dotenv";
import { Queue, ConnectionOptions, Worker, Job, DelayedError } from "bullmq";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

const redisOptions: any = {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
};

const createQueue = async (queuesList: string[]) => {
  try {
    const queues = await queuesList
      .map((qs) => new Queue(qs, redisOptions))
      .map((q) => new BullMQAdapter(q));
    return queues;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  dotenv.config();

  // Define the Redis connection options

  // Create a new queue with the Redis connection options
  const queuesList = ["Daily Mail Queue", "Daily Upload Queue"];
  const queues = await queuesList
    .map(
      (qs) =>
        new Queue(
          qs,

          { ...redisOptions }
        )
    )
      .map((q) => new BullMQAdapter(q));
    queuesList.forEach((queueName) => {
        
    })
  queuesList.forEach((queueData) => {
    new Worker(
      queueData,
      async (job) => {
        sendDailyMail(job);
      },
      {
        connection: redisOptions,
      }
    );
  });

  const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues,
    serverAdapter: serverAdapter,
  });
})();

const sendDailyMail = async (job: Job) => {
  try {
    setTimeout(() => {
      console.log("Job completed");
    }, 5000);
  } catch (error) {
    console.log(error);
  }
};

export default serverAdapter;
