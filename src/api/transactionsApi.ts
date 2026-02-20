const BASE_URL = 'http://localhost:3001/transactions';

// get method to get all transactions
export const getTransactions = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};
