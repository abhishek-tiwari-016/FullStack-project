// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipes } from '../api';

interface Recipe {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  cookTimeMinutes: number;
  tags: string[];
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    if(query != ''){
        fetchRecipes(query).then((data) => {
          setRecipes(data);
          setFilteredRecipes(data);
        });
    }
  }, [query]);

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    setQuery(lower);
  };

  return (
    <div style={{ padding: '16px' }}>
      <SearchBar onSearch={handleSearch} />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;