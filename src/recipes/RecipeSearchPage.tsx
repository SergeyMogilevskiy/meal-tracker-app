import React, { useState } from 'react';
import { useIngredients } from '../ingredients';
import { BackButton } from '../ui';
import { RecipeSearchResultsList } from './RecipeSearchResultsList';
import { useRecipeSearchResults } from './useRecipeSearchResults';

export function RecipeSearchPage(): JSX.Element {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchString, setSearchString] = useState('');
  const { ingredients } = useIngredients();
  const { searchResult } = useRecipeSearchResults(searchString);

  function onSearchClicked() {
    setSearchString(searchInputValue);
  }

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Add Mea to Plan</h1>
        <input
          type="text"
          className="full-width space-before space-after"
          placeholder="Enter keyword here"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button className="full-width space after" onClick={onSearchClicked}>
          Search
        </button>
        <RecipeSearchResultsList recipes={searchResult} ingredients={ingredients} />
      </div>
    </div>
  );
}
