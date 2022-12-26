import { useEffect, useState } from 'react';

export function useMeals() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rawMeals, setRawMeals] = useState<RawMeal[]>([]);

  const loadMeals = async () => {
    try {
      const rawMealsResponse = await fetch('/meals').then((resp) => resp.json());

      setRawMeals(rawMealsResponse as RawMeal[]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMeals();
  }, []);

  return {
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    isLoading,
    setMeals: setRawMeals,
  };
}

interface Recipe {
  _id: string;
  id: string;
  name: string;
  ingredients: { name: string; amount: number; units: string }[];

  originalRecipeLink: string;
}

export interface Meal {
  plannedDate: Date;
  recipeId: string;
  _id: string;
  recipe: Recipe;
}

export interface RawMeal extends Omit<Meal, 'plannedDate'> {
  plannedDate: string;
}
