import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: {
    userAccounts?: mongoDB.Collection;
} = {};

export async function connectToDB() {
    dotenv.config();
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.CONNECTION_STRING);

    await client.connect();

    const userDb: mongoDB.Db = client.db(process.env.USER_DB_NAME);
    const userAccountCollection = userDb.collection(process.env.USER_ACCOUNT_COLLECTION_NAME);

    collections.userAccounts = userAccountCollection;

    console.log(
        `Successfully connected to database: ${userDb.databaseName} and collection: ${userAccountCollection.collectionName}`,
    );

    return userAccountCollection;
}
