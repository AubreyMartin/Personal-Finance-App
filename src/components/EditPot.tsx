import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getPots, updatePot } from '../api/potsApi';
import type { Pot } from '../types';

const THEME_OPTIONS = [
  { label: 'Green', value: '#277C78' },
  { label: 'Yellow', value: '#F2CDAC' },
  { label: 'Cyan', value: '#82C9D7' },
  { label: 'Navy', value: '#626070' },
  { label: 'Red', value: '#C75B5B' },
  { label: 'Purple', value: '#826CB0' },
  { label: 'Turquoise', value: '#277C78' },
];

export default function EditPot() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const idParam = searchParams.get('id');
  const id = idParam ?? null; // keep as string; db.json uses string ids (e.g. "821f")

  const [pot, setPot] = useState<Pot | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [theme, setTheme] = useState(THEME_OPTIONS[0].value);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id == null || id === '') {
      setLoading(false);
      return;
    }
    let cancelled = false;
    getPots()
      .then((pots: Pot[]) => {
        if (cancelled) return;
        const found = pots.find((p) => String(p.id) === String(id));
        if (found) {
          setPot(found);
          setName(found.name);
          setTarget(String(found.target));
          setTheme(found.theme);
        }
      })
      .catch(() => {
        if (!cancelled) setError('Failed to load pot.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  const charsLeft = 30 - name.length;
  const targetNum = parseFloat(target) || 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pot?.id == null) return;
    setError('');
    if (!name.trim()) {
      setError('Please enter a pot name.');
      return;
    }
    if (targetNum <= 0) {
      setError('Please enter a target greater than 0.');
      return;
    }
    setSubmitting(true);
    try {
      await updatePot(pot.id, { name: name.trim(), target: targetNum, theme });
      navigate('/pots');
    } catch (err) {
      setError('Failed to save. Is the server running on port 3001?');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="add-budget">
        <p className="text-preset-4">Loading…</p>
      </div>
    );
  }

  if (id == null || id === '' || !pot) {
    return (
      <div className="add-budget">
        <p className="text-preset-4">Pot not found.</p>
        <button type="button" className="submit-button" onClick={() => navigate('/pots')}>
          Back to Pots
        </button>
      </div>
    );
  }

  return (
    <div className="add-budget">
      <div className="title-control">
        <h1 className="text-preset-1">Edit Pot</h1>
        <button type="button" className="cancel-add" onClick={() => navigate('/pots')}>
          X
        </button>
      </div>

      <p className="Description text-preset-4">
        If your saving targets change, feel free to update your pots.
      </p>

      <form className="budget-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <p className="text-preset-5-bold">Pot Name</p>
          <input
            className="add-amount"
            type="text"
            placeholder="e.g. Concert Ticket"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 30))}
            maxLength={30}
          />
          <p>{charsLeft} characters left</p>
        </div>

        <div className="amount-box">
          <div className="text-preset-5-bold">Target</div>
          <input
            className="add-amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="e.g. 150"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>

        <div className="theme-colour">
          <p className="text-preset-5-bold">Theme</p>
          <select
            className="dropdown"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {THEME_OPTIONS.map((opt) => (
              <option key={opt.value + opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-preset-5" style={{ color: 'var(--red)' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className="submit-button text-preset-4-bold"
          disabled={submitting}
        >
          {submitting ? 'Saving…' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
