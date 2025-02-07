import "dotenv/config";
import expres, { json } from "express";
import { connectMongoDb } from "./config/database";
import { authRouter } from "./routes/authRouter";
import { transactionRouter } from "./routes/transactionsRoutes";

const app = expres();

app.use(json());

connectMongoDb();

app.use("/bank", authRouter);
app.use("/bank", transactionRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`server listening in: localhost:${port}`));
