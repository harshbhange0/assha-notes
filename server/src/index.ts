import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Router from "./routes";
import cors from "cors";

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
  console.log(`app listening at http://localhost:${PORT}`);
});
