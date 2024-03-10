// server.js
import express, { json } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import cors from 'cors';

const app = express();
const PORT = 3002;

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the visitor counter API!');
});

app.get('/count', (req, res) => {
  const countData = JSON.parse(readFileSync('count.json'));
  const totalVisitors = countData.totalVisitors;
  res.json({ totalVisitors });
});

app.post('/count', (req, res) => {
  const countData = JSON.parse(readFileSync('count.json'));
  countData.totalVisitors++;
  writeFileSync('count.json', JSON.stringify(countData));
  res.json({ message: 'Visitor count updated successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
