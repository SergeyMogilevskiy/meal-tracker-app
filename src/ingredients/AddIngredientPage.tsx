import React, { useState } from 'react';
import { BackButton, Dropdown } from '../ui';
import { useNavigate } from 'react-router-dom';

const unitOptions = ['count', 'kilograms', 'cups', 'tablespoons', 'teaspoons'];

export function AddIngredientPage(): JSX.Element {
  const [ingredient, setIngredient] = useState({
    name: '',
    amount: 0,
    units: unitOptions[0],
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    const {
      target: { name, value },
    } = event;
    setIngredient({
      ...ingredient,
      [name]: value,
    });
  }
  const navigate = useNavigate();

  async function addToIngredients() {
    await fetch('/ingredients', {
      method: 'post',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    navigate('/');
  }

  return (
    <div className="page">
      <BackButton />
      <div className="centered-container">
        <h1>Add Ingredient</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter ingredient name"
          className="space-after space-before full-width"
          value={ingredient.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          className="space-before full-width"
          value={ingredient.amount}
          onChange={handleChange}
        />
        <Dropdown
          className="space-before full-width"
          value={ingredient.units}
          name="units"
          options={unitOptions}
          onChange={handleChange}
        />
        <button className="space-before full-width" onClick={addToIngredients}>
          Add
        </button>
      </div>
    </div>
  );
}
