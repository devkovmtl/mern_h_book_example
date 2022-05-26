import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
dotenv.config();

const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE } =
  process.env;

// CONNECTION TO DB
const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URI, MONGO_OPTIONS);
// Get the default connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// EXPRESS APP
const app = express();

app.listen(PORT || 8080, () => {
  console.log(`Server running on port 8800`);
});
