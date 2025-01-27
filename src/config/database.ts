import mongoose from "mongoose";

export async function connectMongoDb() {
  const mongoUrl =
    "mongodb+srv://admin:admin@wallet-cluster.lif8e.mongodb.net/?retryWrites=true&w=majority&appName=wallet-cluster";

  try {
    await mongoose.connect(mongoUrl);
    console.log("connect database");
  } catch (error) {
    console.error(error);
  }
}

export async function disconnectMongoDb() {
  await mongoose.disconnect();
}
