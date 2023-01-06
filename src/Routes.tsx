import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { AddIngredientPage } from './ingredients';
import { RecipeSearchPage } from './recipes';
import { ShoppingListPage } from './shopping-list';

interface RouteProp {
  path: string;
  Component: () => JSX.Element;
}
const routes: RouteProp[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/add-ingredient',
    Component: AddIngredientPage,
  },
  {
    path: '/recipes',
    Component: RecipeSearchPage,
  },
  {
    path: '/shopping-list',
    Component: ShoppingListPage,
  },
];

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </Router>
  );
}
