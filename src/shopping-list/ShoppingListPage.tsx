import * as React from 'react';
import { BackButton } from '../ui';
import { useShoppingList } from './useShoppingList';

export function ShoppingListPage(): JSX.Element {
  const { isLoading, items } = useShoppingList();

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Here's you shopping list</h1>
        {isLoading ? <p>Loading...</p> : items.map((item) => <p key={item}>{item}</p>)}
      </div>
    </div>
  );
}
