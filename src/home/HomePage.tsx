import * as React from 'react';
import { Link } from 'react-router-dom';
import { useIngredients } from '../ingredients';
import { IngredientsList } from '../ingredients/IngredientsList';
import { useMeals, MealsList } from '../meals';

export function HomePage(): JSX.Element {
  const { meals, isLoading: isLoadingMeals, onDeleteMeal } = useMeals();
  const { ingredients, isLoading: isLoadingIngredients, onDeleteIngredient } = useIngredients();

  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} onDelete={onDeleteMeal} />
      </div>
      <div className="column">
        <IngredientsList isLoading={isLoadingIngredients} ingredients={ingredients} onDelete={onDeleteIngredient} />
        <Link to="/shopping-list">
          <button className="shopping-list-button list-container full-width">Generate Shopping List</button>
        </Link>
      </div>
    </div>
  );
}
