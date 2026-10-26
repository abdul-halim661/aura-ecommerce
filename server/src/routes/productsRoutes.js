import express from "express";
const router = express.Router();

// Test products - পরে MongoDB থেকে আনবে
router.get("/", (req, res) => {
  res.json([
    { _id: "1", name: "Aura T-Shirt", price: 1200, image: "https://via.placeholder.com/300" },
    { _id: "2", name: "Aura Hoodie", price: 2500, image: "https://via.placeholder.com/300" },
    { _id: "3", name: "Aura Cap", price: 800, image: "https://via.placeholder.com/300" },
  ]);
});

export default router;