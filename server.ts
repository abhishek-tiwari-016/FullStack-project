import express, { Request, Response } from "express";
import { db } from "./dataBase/db";
import { Recipe } from "./types";
import { loadData } from "./dataBase/loadData";

const app = express();
const port = 3001;

app.use(express.json());

app.get("/recipes", (req: Request, res: Response) => {
  const search = req.query.search ? `%${req.query.search}%` : "%";

  console.log(search);
  const query = `
    SELECT * FROM recipes
    WHERE name LIKE ? OR cuisine LIKE ?
  `;

  db.all(query, [search, search], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get("/recipes/:id", (req: Request, res: Response) => {
  const query = `SELECT * FROM recipes WHERE id = ?`;

  db.get(query, [req.params.id], (err, row: Recipe) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Recipe not found" });
    res.json(row);
  });
});

async function startServer() {
  try {
    await loadData();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log("Failed to start server: ", err);
    process.exit(1);
  }
}

startServer();