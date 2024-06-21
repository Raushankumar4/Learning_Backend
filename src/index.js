import { app } from "./app.js";
import connectDB from "./db/db.js";
import { config } from "dotenv";

config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("DB CONNECTION FAILED", err);
  });
