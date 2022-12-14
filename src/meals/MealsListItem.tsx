import React from 'react';
import { Link } from 'react-router-dom';
import { SmallX } from '../ui';
import { Meal } from './useMeals';

interface MealsListItemProps {
  meal?: Meal;
  date: Date;
}

export function MealsListItem({ meal, date }: MealsListItemProps): JSX.Element {
  return (
    <div className="list-item">
      <h3>{date.getDate()}</h3>
      {meal ? (
        <>
          <p>{meal.recipe.name}</p>
          <div className="right-action">
            <SmallX onClick={() => {}} />
          </div>
        </>
      ) : (
        <>
          <p>No meal planned</p>
          <div className="right-action">
            <Link to={`recipes?date=${date.toDateString}`}>
              <button>Add</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
