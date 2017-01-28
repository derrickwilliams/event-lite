import express from 'express';
import mongoose from 'mongoose';
import P from 'bluebird';

import { User } from './models';
import { app as seedApp } from './seed';

const app = express();

mongoose.connect('mongodb://db/ss');

const rootController = (req, res) => {
  return res.json({ data: 'Welcome to shedge' });
};

const adminUserController = (req, res) => {
  const { uid } = req.params;
  return P.resolve(User.find({ uid: uid }))
    .then(user => {
      res.json({ data: user, boogers: true });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ errors: [err.toString()] });
    });
};

app.use('/seed', seedApp);

app.get('/', rootController);
app.get('/events', (req, res) => res.json({ data: [{ id: 'event1' }] }));

export { app as apiApp };