import dotenv from "dotenv";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

dotenv.config();

const client = new MongoClient(process.env.DB_URI);
const db = client.db("idea-vault");

export const auth = betterAuth({
   baseURL: process.env.BETTER_AUTH_URL, 
   database: mongodbAdapter(db, {client
  }),
   emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});