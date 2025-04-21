# FullStack Recipe Project

This is a full-stack web application for searching and viewing recipes.  
Built with:

- **Backend**: Node.js, SQLite, Express (or native HTTP)
- **Frontend**: React + TypeScript

---

## Features

- Load recipe data from external JSON to SQLite (inMemory using :memory:)
- Search recipes by name or cuisine
- View recipe details
- Frontend UI with search, list, and detail views

---

## Folder Structure

- FullStack-project/
- ├── dataBade/         # Node.js + SQLite backend
-     ├── db            # initialise inmemory sqlite db
-     ├── loadData      # loading data from external URL to db
- ├── recipe-ui/        # React frontend running on 3000 port
- ├── server/           # Backend running on 3001 port
- └── README.md

---

## Prerequisites

- [Node.js (v18+ recommended)](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- Git

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/abhishek-tiwari-016/FullStack-project.git
cd FullStack-project
```

### 2. Run both backend and UI using concurrently

```bash
npm start
```

---

## API Endpoints

### 1. `GET /recipes?search=<query>`

- **Description**: Returns a list of recipes matching the search query in either the name or cuisine.
- **Query Param**:
  - `search`: (optional) keyword to match against recipe name or cuisine.
- **Response**:
  ```json
  [
    {
        "id": 1,
        "name": "Classic Margherita Pizza",
        "ingredients": "[\"Pizza dough\",\"Tomato sauce\",\"Fresh mozzarella cheese\",\"Fresh basil leaves\",\"Olive oil\",\"Salt and pepper to taste\"]",
        "instructions": "[\"Preheat the oven to 475°F (245°C).\",\"Roll out the pizza dough and spread tomato sauce evenly.\",\"Top with slices of fresh mozzarella and fresh basil leaves.\",\"Drizzle with olive oil and season with salt and pepper.\",\"Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.\",\"Slice and serve hot.\"]",
        "preptimeMinutes": null,
        "cooktimeMinutes": null,
        "servings": 4,
        "difficulty": "Easy",
        "cuisine": "Italian",
        "caloriesPerServing": 300,
        "tags": "[\"Pizza\",\"Italian\"]",
        "userId": 166,
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "rating": 4.6,
        "reviewCount": 98,
        "mealType": "[\"Dinner\"]"
    }
    ...
  ]

## Demo SS

<img width="970" alt="Screenshot 2025-04-22 at 4 19 35 AM" src="https://github.com/user-attachments/assets/479de1c3-6b56-461c-9652-da82b7f36d67" />
<img width="1490" alt="Screenshot 2025-04-22 at 4 19 17 AM" src="https://github.com/user-attachments/assets/05a8f5bb-b844-4d98-ad1e-9e4aa66f2648" />


