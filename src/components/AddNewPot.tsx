import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPot } from '../api/potsApi';

const THEME_OPTIONS = [
  { label: 'Green', value: '#277C78' },
  { label: 'Yellow', value: '#F2CDAC' },
  { label: 'Cyan', value: '#82C9D7' },
  { label: 'Navy', value: '#626070' },
  { label: 'Red', value: '#C75B5B' },
  { label: 'Purple', value: '#826CB0' },
  { label: 'Turquoise', value: '#277C78' },
];

export default function AddNewPot() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [theme, setTheme] = useState(THEME_OPTIONS[0].value);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const targetNum = parseFloat(target) || 0;
  const charsLeft = 30 - name.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      await createPot({ name: name.trim(), target: targetNum, theme });
      navigate('/pots');
    } catch (err) {
      setError('Failed to create pot. Is the server running on port 3001?');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="add-budget">
      <div className="title-control">
        <h1 className="text-preset-1">Add New Pot</h1>
        <button
          type="button"
          className="cancel-add"
          onClick={() => navigate('/pots')}
        >
          X
        </button>
      </div>

      <p className="Description text-preset-4">
        Create a pot to set savings targets. These can help keep you on track as
        you save for special purchases.
      </p>

      <form className="budget-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <p className="text-preset-5-bold">Pot Name</p>
          <input
            className="add-amount"
            type="text"
            placeholder="e.g. Rainy Days"
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
            placeholder="e.g. 2000"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>

        <div className="theme-colour">
          <p className="text-preset-5-bold">Theme</p>
          <div className="theme-colour">
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
        </div>

        {error && <p className="text-preset-5" style={{ color: 'var(--red)' }}>{error}</p>}

        <button
          type="submit"
          className="submit-button text-preset-4-bold"
          disabled={submitting}
        >
          {submitting ? 'Adding…' : 'Add Pot'}
        </button>
      </form>
    </div>
  );
}
