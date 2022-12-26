import * as React from 'react';
import { SmallX } from '../ui';
import { Ingredient } from './useIngredients';

export function IngredientsListItem({ ingredient, onDelete }: IngredientsListItemProps): JSX.Element {
  return (
    <div className="list-item">
      <h3>{ingredient.name}</h3>
      <p>
        {ingredient.amount} {ingredient.units}
      </p>
      <div className="right-action">
        <SmallX onClick={() => onDelete(ingredient.name)} />
      </div>
    </div>
  );
}

interface IngredientsListItemProps {
  ingredient: Ingredient;
  onDelete: (name: string) => void;
}
