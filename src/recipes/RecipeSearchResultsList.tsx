import React from 'react';
import { Ingredient } from '../ingredients/useIngredients';
import { Recipe } from '../meals/useMeals';
import { RecipeSearchResultsListItem } from './RecipeSearchResultsListItem';

export function RecipeSearchResultsList({ ingredients, recipes }: RecipeSearchResultsListProps): JSX.Element {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeSearchResultsListItem key={recipe.id} recipe={recipe} ingredients={ingredients} />
      ))}
    </>
  );
}

interface RecipeSearchResultsListProps {
  ingredients: Ingredient[];
  recipes: Recipe[];
}
