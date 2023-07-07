import express, { json } from "express";
import crypto from "node:crypto";
import { Article, NewArticle } from "./interfaces/Article";

const app = express.Router();

let articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 120 },
  { id: "a2", name: "Marteau", price: 5, qty: 45 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.use(json());

app.post("/articles", (req, res) => {
  const newArticle: NewArticle = req.body;
  const article = { ...newArticle, id: crypto.randomUUID() };
  articles.push(article);
  res.status(201).end();
});

app.delete("/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});

export const api = app;
