const BASE_URL = 'http://localhost:3001/pots';

export const getPots = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createPot = async (pot: {
  name: string;
  target: number;
  total?: number;
  theme: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...pot, total: pot.total ?? 0 }),
  });
  return res.json();
};

export const updatePot = async (
  id: number | string,
  data: { name?: string; target?: number; total?: number; theme?: string }
) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update pot');
  return res.json();
};

export const deletePot = async (id: number | string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete pot');
};
