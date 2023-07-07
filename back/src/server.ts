console.log("About to start a server...");

import express, { NextFunction, Request, Response } from "express";
import serveIndex from "serve-index";
import { api } from "./api";

const app = express();
const port = 3000;
const publicDir = "../front/dist/front";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log("req: ", req.method, req.url);
  next();
};

app.use(logger);

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.get("/**", (req, res) => {
  res.sendFile("index.html", { root: publicDir });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
