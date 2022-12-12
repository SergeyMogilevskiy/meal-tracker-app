import React, { useEffect, useState } from 'react';

interface MealsRequestHelpers {
  meals: any;
  isLoading: boolean;
  setMeals: React.Dispatch<React.SetStateAction<any[]>>;
}

export function useMeals(): MealsRequestHelpers {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [meals, setMeals] = useState<any>([]);

  const loadMeals = async () => {
    setIsLoading(true);
    try {
      const meals = await fetch('/meals').then((resp) => resp.json());
      setMeals(meals);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMeals();
  }, []);

  return { meals, isLoading, setMeals };
}
