import expres, { json } from "express";
import { connectMongoDb } from "./config/database";
import { authRouter } from "./routes/authRouter";

const app = expres();

app.use(json());

connectMongoDb();

app.use("/bank", authRouter);

app.listen(3000, () => console.log("server listening in: localhost:3000"));
