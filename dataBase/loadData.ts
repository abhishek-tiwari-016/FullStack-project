import axios from "axios";
import { db } from "./db";
import { Recipe } from "../types";

// Replace this with your actual data URL
const DATA_URL = "https://dummyjson.com/recipes";

export async function loadData(): Promise<void> {
  try {
    const { data } = await axios.get(DATA_URL);

    await new Promise<void>((resolve, reject) => {
      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY,
        name TEXT,
        ingredients TEXT,
        instructions TEXT,
        preptimeMinutes INTEGER,
        cooktimeMinutes INTEGER,
        servings INTEGER,
        difficulty TEXT,
        cuisine TEXT,
        caloriesPerServing INTEGER,
        tags TEXT,
        userId INTEGER,
        image TEXT,
        rating REAL,
        reviewCount INTEGER,
        mealType TEXT
      );
    `;

      db.run(createTableQuery, (err) => {
        if (err) return console.error("Error creating table:", err.message);

        const insertQuery = `
        INSERT OR REPLACE INTO recipes (
          id, name, ingredients, instructions,
          preptimeMinutes, cooktimeMinutes, servings,
          difficulty, cuisine, caloriesPerServing,
          tags, userId, image, rating, reviewCount, mealType
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

        const insert = db.prepare(insertQuery);
        data.recipes.forEach((recipe: Recipe) => {
          insert.run(
            recipe.id,
            recipe.name,
            JSON.stringify(recipe.ingredients),
            JSON.stringify(recipe.instructions),
            recipe.preptimeMinutes,
            recipe.cooktimeMinutes,
            recipe.servings,
            recipe.difficulty,
            recipe.cuisine,
            recipe.caloriesPerServing,
            JSON.stringify(recipe.tags),
            recipe.userId,
            recipe.image,
            recipe.rating,
            recipe.reviewCount,
            JSON.stringify(recipe.mealType)
          );
        });

        insert.finalize((err) => {
          if (err) return reject(err);
          console.log(`Inserted ${data.recipes.length} recipes into the DB.`);
        //   db.close();
          resolve();
        });
      });
    });
    console.log(`Data loaded successfully`);
  } catch (err: any) {
    console.error("Failed to fetch or insert data:", err.message);
  }
}
