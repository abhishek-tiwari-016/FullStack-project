import axios from "axios";

const BASE_URL = "http://localhost:3001";

export async function fetchRecipes(search?: string) {
  const params = search ? `?search=${encodeURIComponent(search)}` : "";
  const res = await fetch(`${BASE_URL}/recipes${params}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return res.json();
}

export async function fetchRecipeById(ID: number) {
  const res = await fetch(`${BASE_URL}/recipes/${ID}`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
}
