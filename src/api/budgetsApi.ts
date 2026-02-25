const BASE_URL = 'http://localhost:3001/budgets';

// get method to get all Budgets
export const getBudgets = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};
