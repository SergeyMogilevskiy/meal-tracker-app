import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Ingredient } from '../ingredients/useIngredients';
import { Recipe } from '../meals/useMeals';

const todayDay = new Date().toString();
export function RecipeSearchResultsListItem({ recipe, ingredients = [] }: RecipeSearchResultsListItemProps) {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const selectedDate = new Date(searchParam.get('date') || todayDay);
  const missingIngredients = recipe.ingredients.filter((recipeIngredient) => {
    return !ingredients.some((ingredient) => ingredient.name === recipeIngredient.name);
  });

  async function addMealWithRecipe() {
    await fetch('/meals', {
      method: 'post',
      body: JSON.stringify({
        date: selectedDate,
        recipeId: recipe.id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    navigate('/');
  }

  return (
    <div className="search-list-item" onClick={addMealWithRecipe}>
      <h3>{recipe.name}</h3>
      {missingIngredients.length === 0 ? (
        <p>You have all the required ingredients!</p>
      ) : (
        <p>You are missing {missingIngredients.length} ingredients</p>
      )}{' '}
    </div>
  );
}

interface RecipeSearchResultsListItemProps {
  recipe: Recipe;
  ingredients: Ingredient[];
}
