import React from 'react';
import { Link } from 'react-router-dom';
import { SmallX } from '../ui';
import { Meal } from './useMeals';

export function MealsListItem({ meal, date, onDelete }: MealsListItemProps): JSX.Element {
  return (
    <div className="list-item">
      <h3>{date.getDate()}</h3>
      {meal ? (
        <>
          <p>{meal.recipe.name}</p>
          <div className="right-action">
            <SmallX onClick={() => onDelete(meal._id)} />
          </div>
        </>
      ) : (
        <>
          <p>No meal planned</p>
          <div className="right-action">
            <Link to={`recipes?date=${date.toString()}`}>
              <button>Add</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

interface MealsListItemProps {
  meal?: Meal;
  date: Date;
  onDelete: (id: string) => void;
}
