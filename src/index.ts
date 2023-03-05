import express from "express";
import { connectToDB } from "./services/database.services";
import { userAccountRouter } from "./routes/userAccount.router";

const app = express();

connectToDB()
    .then(() => {
        app.use("/", userAccountRouter);

        app.listen(process.env.PORT, () => {
            console.log(`Server started at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
