import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "9390d0ba";
  const APP_KEY = "1e0740a972ffa521d1cb42631dfa03d0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chocolate');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form 
      onSubmit={getSearch} 
      className="search-form">
        <input 
        type="text" 
        placeholder="Recipe" 
        className="search-bar" 
        value={search} 
        onChange={updateSearch} />
        <button 
        type="submit" 
        className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.foodId} 
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients} 
          image={recipe.recipe.image}
          link={recipe.recipe.url} />
        ))}
      </div>
    </div>
  );
};

export default App;
