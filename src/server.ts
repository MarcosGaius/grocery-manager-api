import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectToDatabase } from "./db";

(() => {
  const PORT = process.env.SERVER_PORT || 3000;

  connectToDatabase()
    .then(() => {
      console.log("Connected to the database!");
      app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log("\nError during server initialization \n", error);
    });
})();
