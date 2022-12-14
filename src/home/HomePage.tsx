import * as React from 'react';
import { useMeals, MealsList } from '../meals';

export function HomePage(): JSX.Element {
  const { meals, isLoading: isLoadingMeals } = useMeals();
  console.log(meals);

  React.useEffect(() => {
    console.log('meals');
  }, []);

  return (
    <div className="page-container">
      <div className="column">
        <MealsList isLoading={isLoadingMeals} meals={meals} />
      </div>
    </div>
  );
}
