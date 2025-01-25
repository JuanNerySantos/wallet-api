import expres, { json } from "express";
import { authRouter } from "./routes/authRouter";

const app = expres();

app.use(json());

app.use("/bank", authRouter);

app.listen(3000, () => console.log("server listening in: localhost:3000"));
