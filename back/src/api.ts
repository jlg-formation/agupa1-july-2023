import express from "express";

const app = express.Router();

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Marteau", price: 5, qty: 45 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
