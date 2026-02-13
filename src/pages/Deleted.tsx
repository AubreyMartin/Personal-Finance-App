import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { deletePot } from '../api/potsApi';

export default function Deleted() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const from = searchParams.get('from') ?? '/pots';
  const idParam = searchParams.get('id');
  const [deleting, setDeleting] = useState(false);

  const fromText: Record<string, string> = { '/pots': 'Pot', '/budgets': 'Budget' };

  const handleConfirmDelete = async () => {
    if (from === '/pots' && idParam) {
      setDeleting(true);
      try {
        await deletePot(idParam); // id can be string (e.g. "821f") or number
        navigate('/pots');
      } catch (err) {
        console.error('Delete failed', err);
      } finally {
        setDeleting(false);
      }
    } else {
      navigate(from);
    }
  };

  return (
    <div className="deleted-budget">
      <div className="title-control">
        <h1 className="text-preset-1">Delete {name}?</h1>
        <button type="button" className="cancel-add" onClick={() => navigate(from)}>
          X
        </button>
      </div>
      <p className="text-preset-4">
        Are you sure you want to delete this {fromText[from] ?? 'item'}? This
        action cannot be reversed, and all the data inside it will be removed
        forever.
      </p>

      <div className="decision-buttons">
        <button
          type="button"
          className="deletedbuttons text-preset-4-bold"
          onClick={handleConfirmDelete}
          disabled={deleting}
        >
          {deleting ? 'Deleting…' : 'Yes, Confirm Deletion'}
        </button>

        <button
          type="button"
          className="goback-buttons text-preset-4"
          onClick={() => navigate(from)}
        >
          No, Go Back
        </button>
      </div>
    </div>
  );
}
