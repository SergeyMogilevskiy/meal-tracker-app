import * as React from 'react';
import { Link } from 'react-router-dom';
import { IngredientsListItem, IngredientsListItemProps } from './IngredientsListItem';

export function IngredientsList({ isLoading, ingredients }: IngredientsListProps): JSX.Element {
  return (
    <div className="list-container">
      <h1>IngredientsList</h1>
      {isLoading ? (
        <p>Loading...a</p>
      ) : (
        ingredients.map((ingredients) => <IngredientsListItem key={ingredients.name} ingredient={ingredients} />)
      )}
      <Link to="/add-ingredient">
        <button className="space-before">+ Add Ingredient</button>
      </Link>
    </div>
  );
}

interface IngredientsListProps {
  ingredients: IngredientsListItemProps['ingredient'][];
  isLoading: boolean;
}
