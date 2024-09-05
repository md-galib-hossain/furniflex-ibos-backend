import cookieParser from "cookie-parser";
import express,{ Application, Request, Response } from "express";
import cors from 'cors'
import router from "./app/routes";
const app: Application = express();

//parsers
app.use(express.json())
app.use(cookieParser())
app.use(cors())
//application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
    res.send("Hey root route working!");
  });

export default app