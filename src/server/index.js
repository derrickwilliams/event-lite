import express from 'express';
import { apiApp } from './api-app';

const { PORT } = process.env;

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(express.static('ui'));
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/admin', (req, res) => {
  res.render('admin');
});

app.use('/api', apiApp);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));