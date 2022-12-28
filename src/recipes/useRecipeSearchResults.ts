import { useState, useEffect } from 'react';

export function useRecipeSearchResults(searchString: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    async function loadSearchResult() {
      const results = await fetch(`/recipes?search=${searchString}`).then((response) => response.json());
      setSearchResult(results);
      setIsLoading(false);
    }

    loadSearchResult();
  }, [searchString]);

  return { isLoading, searchResult };
}
