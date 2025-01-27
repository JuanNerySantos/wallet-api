import "dotenv/config";
import expres, { json } from "express";
import { connectMongoDb } from "./config/database";
import { authRouter } from "./routes/authRouter";

const app = expres();

app.use(json());

connectMongoDb();

app.use("/bank", authRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`server listening in: localhost:${port}`));
