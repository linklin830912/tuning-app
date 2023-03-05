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
