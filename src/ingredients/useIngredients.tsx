import { useEffect, useState } from 'react';

export function useIngredients() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  async function onDeleteIngredient(name: string) {
    const updatedIngredients = await fetch(`/ingredients/${name}`, { method: 'delete' }).then<Ingredient[]>(
      (response) => response.json()
    );

    setIngredients(updatedIngredients);
  }

  useEffect(() => {
    async function loadIngredients() {
      const ingredients = await fetch('/ingredients').then<Ingredient[]>((response) => response.json());

      setIngredients(ingredients);
      setIsLoading(false);
    }

    loadIngredients();
  }, []);

  return { isLoading, ingredients, onDeleteIngredient };
}

export interface Ingredient {
  name: string;
  amount: number;
  units: string;
  _id: string;
}
