import * as express from "express";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.services";
import UserAccount from "../models/UserAccount";

// Global Config
export const userAccountRouter = express.Router();

userAccountRouter.use(express.json());

userAccountRouter.get("/", async (req: Request, res: Response) => {
    try {
        const userAccounts = await collections?.userAccounts.find({}).toArray();
        res.status(200).send(userAccounts);
    } catch (error) {
        res.status(error.status).send(error.message);
    }
});

userAccountRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;
    console.log("!!!wtf");
    try {
        const userAccount = {
            password: "duckKKKK",
            nickName: "duck",
            instrument: "duck",
            role: "duck",
            email: "duck",
        } as UserAccount;

        const query = { _id: new ObjectId(id) };
        const result = await collections.userAccounts.updateOne(query, { $set: userAccount });
        result
            ? res.status(200).send(`Successfully updated game with id ${id}`)
            : res.status(3044).send(`Game with id: ${id} not updated`);
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});
