import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AURA API Running 🔥');
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Oversized Hoodie", price: 2850, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500" },
    { id: 2, name: "Cargo Pants", price: 3200, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500" },
    { id: 3, name: "Street Tee", price: 1500, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));