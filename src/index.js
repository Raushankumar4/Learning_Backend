import connectDB from "./db/db.js";
import { config } from "dotenv";

config({ path: "./env" });

connectDB();
