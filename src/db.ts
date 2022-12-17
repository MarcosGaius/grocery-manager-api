import { MongoClient, Db } from "mongodb";

let dbConnection: Db;

const connectToDatabase = async (cb: any): Promise<any> => {
  try {
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/bookstore?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
    );
    dbConnection = client.db();
    return cb();
  } catch (error) {
    console.error(error);
    return cb(error);
  }
};

const getDatabaseConnection = () => {
  return dbConnection;
};

export { connectToDatabase, getDatabaseConnection };
