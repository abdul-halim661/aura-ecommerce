import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// In-memory users for quick test
const users = [];

app.get("/", (req,res)=> res.send("API is running - AUTH READY"));
app.get("/api/test", (req,res)=> res.json({message: "Server is ALIVE on 5001"}));

// REGISTER
app.post("/api/auth/register", async (req,res)=>{
  const { name, email, password } = req.body;
  if(!name || !email || !password) return res.status(400).json({message: "All fields required"});
  if(users.find(u=>u.email===email)) return res.status(400).json({message: "User already exists"});
  const hashed = await bcrypt.hash(password, 10);
  const user = { id: Date.now().toString(), name, email, password: hashed };
  users.push(user);
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret123", { expiresIn: "7d" });
  res.json({ message: "Registered", user: { id: user.id, name, email }, token, usersCount: users.length });
});

// LOGIN
app.post("/api/auth/login", async (req,res)=>{
  const { email, password } = req.body;
  const user = users.find(u=>u.email===email);
  if(!user) return res.status(400).json({message: "User not found"});
  const ok = await bcrypt.compare(password, user.password);
  if(!ok) return res.status(400).json({message: "Wrong password"});
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret123", { expiresIn: "7d" });
  res.json({ message: "Login success", user: { id: user.id, name: user.name, email }, token });
});

app.get("/api/auth/users", (req,res)=> res.json(users.map(u=>({id:u.id,name:u.name,email:u.email}))));

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} - AUTH READY`);
});
