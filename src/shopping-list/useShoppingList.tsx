import { useState, useEffect } from 'react';

export function useShoppingList() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadShoppingList() {
      const data = await fetch('/shopping-list').then((response) => response.json());

      setIsLoading(false);
      console.log(data);
      setItems(data);
    }

    loadShoppingList();
  }, []);

  return { isLoading, items };
}
