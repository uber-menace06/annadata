import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDatabase } from "./config/database.js"
import cookieParser from "cookie-parser";
import routes from "./routes.js"

export const app = express();
app.use(cors());
config({
    path: "./config/config.env"
});
connectDatabase();
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
app.use("/api", routes)
app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
});
