import dotenv from "dotenv";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

dotenv.config();

const client = new MongoClient(process.env.DB_URI);
const db = client.db("idea-vault");

export const auth = betterAuth({
  database: mongodbAdapter(db, {client
  }),
   emailAndPassword: { 
    enabled: true, 
  }
});