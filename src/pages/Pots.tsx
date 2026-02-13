import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPots, updatePot } from '../api/potsApi';
import type { Pot } from '../types';
import { Actions } from './Actions';

const formatCurrency = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

type PotModalMode = 'add' | 'withdraw' | null;

function Pots() {
  const [pots, setPots] = useState<Pot[]>([]);
  const navigate = useNavigate();
  const [modalPot, setModalPot] = useState<Pot | null>(null);
  const [modalMode, setModalMode] = useState<PotModalMode>(null);
  const [amount, setAmount] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const loadPots = useCallback(async () => {
    const data = await getPots();
    setPots(data);
  }, []);

  useEffect(() => {
    loadPots();
  }, [loadPots]);

  const openModal = (pot: Pot, mode: 'add' | 'withdraw') => {
    setModalPot(pot);
    setModalMode(mode);
    setAmount('');
    setError('');
  };

  const closeModal = () => {
    setModalPot(null);
    setModalMode(null);
    setAmount('');
    setError('');
  };

  const handleConfirm = async () => {
    if (!modalPot?.id || modalMode == null) return;
    const value = parseFloat(amount);
    if (Number.isNaN(value) || value <= 0) {
      setError('Please enter a valid amount.');
      return;
    }
    if (modalMode === 'withdraw' && value > modalPot.total) {
      setError(`You can't withdraw more than ${formatCurrency(modalPot.total)}.`);
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      const newTotal =
        modalMode === 'add'
          ? modalPot.total + value
          : Math.max(0, modalPot.total - value);
      await updatePot(modalPot.id, { total: newTotal });
      await loadPots();
      closeModal();
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-pots">
      <div className="pot-T-B">
        <h1>Pots</h1>
        <button
          className="pot-add-button"
          onClick={() => navigate('/AddNewPot')}
        >
          + Add New Pot
        </button>
      </div>

      <div className="pots-components">
        {pots.map((pot, index) => {
          const percent = pot.target > 0 ? Math.min(100, (pot.total / pot.target) * 100) : 0;
          const isFirst = index === 0;
          const template = (
            <div className="pots-components-template">
              <div className="pots-components-r1">
                <div className="title-test-preset-2">{pot.name}</div>
                <Actions name={pot.name} from="/pots" edit="/EditPot" id={pot.id} />
              </div>

              <div className="pots-components-progress-bar">
                <div className="pots-components-progress-bar-details">
                  <div className="text-preset-4">Total Saved</div>
                  <div className="text-preset-1">{formatCurrency(pot.total)}</div>
                </div>

                <div>
                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: `${percent}%`, backgroundColor: pot.theme }}
                    />
                  </div>
                </div>
                <div className="pots-components-progress-bar-details">
                  <div className="text-preset-5-bold">{percent.toFixed(1)}%</div>
                  <div className="text-preset-5">
                    Target of {formatCurrency(pot.target)}
                  </div>
                </div>
              </div>

              <div className="pots-components-buttons">
                <button
                  type="button"
                  className="pots-components-each-button"
                  onClick={() => openModal(pot, 'add')}
                >
                  + Add Money
                </button>
                <button
                  type="button"
                  className="pots-components-each-button"
                  onClick={() => openModal(pot, 'withdraw')}
                >
                  Withdraw
                </button>
              </div>
            </div>
          );

          return isFirst ? (
            <div key={pot.id ?? pot.name} className="pots-components-savings">
              {template}
            </div>
          ) : (
            <div key={pot.id ?? pot.name} className="pots-components-gift">
              <div className="pots-components-savings">{template}</div>
            </div>
          );
        })}
      </div>

      {modalPot && modalMode && (
        <div
          className="pot-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pot-modal-title"
        >
          <div className="pot-modal">
            <div className="pot-modal-header">
              <h2 id="pot-modal-title" className="text-preset-2">
                {modalMode === 'add' ? 'Add Money' : 'Withdraw'} – {modalPot.name}
              </h2>
              <button
                type="button"
                className="cancel-add"
                onClick={closeModal}
                aria-label="Close"
              >
                X
              </button>
            </div>
            <p className="text-preset-4 pot-modal-current">
              Current balance: {formatCurrency(modalPot.total)}
            </p>
            <div className="pot-modal-form">
              <label htmlFor="pot-amount" className="text-preset-5-bold">
                Amount ($)
              </label>
              <input
                id="pot-amount"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="add-amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                autoFocus
              />
            </div>
            {error && (
              <p className="text-preset-5 pot-modal-error" role="alert">
                {error}
              </p>
            )}
            <div className="pot-modal-actions">
              <button
                type="button"
                className="submit-button text-preset-4-bold"
                onClick={handleConfirm}
                disabled={submitting}
              >
                {submitting ? 'Updating…' : 'Confirm'}
              </button>
              <button
                type="button"
                className="goback-buttons text-preset-4"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pots;
