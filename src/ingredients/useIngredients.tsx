import { useEffect, useState } from 'react';

export function useIngredients() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function loadIngredients() {
      const ingredients = await fetch('/ingredients').then((response) => response.json());

      setIngredients(ingredients);
      setIsLoading(false);
    }

    loadIngredients();
  }, []);

  return { isLoading, ingredients, setIngredients };
}

export interface Ingredient {
  name: string;
  amount: number;
  units: string;
  _id: string;
}
