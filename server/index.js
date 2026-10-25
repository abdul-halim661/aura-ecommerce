import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AURA API Running 🔥');
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'AURA Oversized Hoodie', price: 2850 },
    { id: 2, name: 'AURA Cargo Pant', price: 3200 },
    { id: 3, name: 'Minimal T-Shirt', price: 1200 },
    { id: 4, name: 'AURA Sneakers', price: 5500 },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`AURA Server running on ${PORT}`);
});