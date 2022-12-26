import React from 'react';
import { MealsListItem } from './MealsListItem';
import { Meal } from './useMeals';

const nextSevenDays = Array(7)
  .fill(undefined)
  .map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

const datesAreSameDay = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() && date1.getDate() === date2.getDate();

export function MealsList({ isLoading, meals, onDelete }: MealsListProps): JSX.Element {
  return (
    <div className="listContainer">
      <h1>Planned Meals</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        nextSevenDays.map((date, index) => {
          const mealForDay = meals.find((meal) => datesAreSameDay(date, meal.plannedDate));

          return <MealsListItem key={index} meal={mealForDay} date={date} onDelete={onDelete} />;
        })
      )}
    </div>
  );
}

interface MealsListProps {
  isLoading: boolean;
  meals: Meal[];
  onDelete: (id: string) => void;
}
