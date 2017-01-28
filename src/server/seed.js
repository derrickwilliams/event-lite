import express from 'express';
import seedData from '../seed/development';

const app = express();

app.get('/', (req, res) => {
  res.json(seedData);
});

export { app };