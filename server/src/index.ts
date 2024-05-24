import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Router from "./routes";
import cors from "cors";
import { exit } from "process";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  return res
    .json({
      message: "Hello World",
    })
    .status(200);
});
app.use("/api/v1", Router);

app.listen(PORT, () => {
  if (!process.env.PORT) {
    console.log("Unable to load .env PORT");
    exit(".env not found");
  }
  console.log(".env loaded");
  console.log(`app listening at http://localhost:${PORT}`);
});
