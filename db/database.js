const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let db;

const connectToDatabase = async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  db = client.db('online-shop');
};

const getDb = () => {
  if (!db) {
    throw new Error(`You must connect first!`.red);
  }

  return db;
};

module.exports = {
  connectToDatabase,
  getDb,
};
