import mongoose from "mongoose";

export async function connectMongoDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL não está definido nas variáveis de ambiente."
    );
  }
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connect database");
  } catch (error) {
    console.error(error);
  }
}

export async function disconnectMongoDb() {
  await mongoose.disconnect();
}
