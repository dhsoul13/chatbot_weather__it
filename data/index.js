import mongoose from "mongoose";

const conectDB = async (keyToken = 0) => {
  try {
    const db = mongoose;
    await db.connect(keyToken, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("База данных подключенна");
  } catch (e) {
    console.log(e);
  }
};

export default conectDB;
