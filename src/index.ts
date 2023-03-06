import express, { Request, Response } from "express";

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { connectToDB } from "./services/database.services";
import { userAccountRouter } from "./routes/userAccount.router";
import morgan from "morgan";

dotenv.config();
const port = process.env.PORT;

const app = express();
// http logger
app.use(morgan("tiny"));

connectToDB()
    .then(() => {
        app.use("/userAccounts", userAccountRouter);

        app.listen(port, () => {
            console.log(`listening... on port ${port} XDXDXD`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
