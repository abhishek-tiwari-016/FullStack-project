// src/components/RecipeCard.tsx
import React from 'react';

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  cookTimeMinutes: number;
  tags: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const tagsParsed = JSON.parse(recipe.tags as unknown as string);
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      margin: '8px',
    }}>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: '100%', borderRadius: '4px', height: '150px', objectFit: 'cover' }}
      />
      <h3>{recipe.name}</h3>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
      <div>
        {tagsParsed && tagsParsed.map((tag: string, index: number) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              padding: '2px 6px',
              margin: '2px',
              backgroundColor: '#eee',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;