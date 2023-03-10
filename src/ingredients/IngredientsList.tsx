import * as React from 'react';
import { Link } from 'react-router-dom';
import { IngredientsListItem } from './IngredientsListItem';
import { Ingredient } from './useIngredients';

export function IngredientsList({ isLoading, ingredients, onDelete }: IngredientsListProps): JSX.Element {
  return (
    <div className="list-container">
      <h1>IngredientsList</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        ingredients.map((ingredients) => (
          <IngredientsListItem key={ingredients.name} ingredient={ingredients} onDelete={onDelete} />
        ))
      )}
      <Link to="/add-ingredient">
        <button className="space-before">+ Add Ingredient</button>
      </Link>
    </div>
  );
}

interface IngredientsListProps {
  ingredients: Ingredient[];
  isLoading: boolean;
  onDelete: (name: string) => void;
}
