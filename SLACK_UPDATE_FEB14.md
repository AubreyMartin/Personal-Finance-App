# Personal Finance App – Updates since Feb 14 (Slack update)

**Period:** Feb 14 – Feb 20, 2026

---

## Committed work (context: last commit Feb 13)

- **Pots:** API integration – add/edit/delete pots, add money & withdraw.

---

## Uncommitted / in-progress work (since Feb 14)

### 1. Transactions API
- **New file:** `src/api/transactionsApi.ts`
- Added `getTransactions()` that fetches from `http://localhost:3001/transactions` (JSON Server).
- Centralizes transaction fetching for use across the app.

### 2. Recurring Bills page
- **Updated:** `src/pages/RecurringBills.tsx`
- Switched from static `data.json` to the transactions API (`getTransactions()`).
- **Dynamic totals (from real data):**
  - **Total Bills** – sum of all recurring transaction amounts.
  - **Paid Bills** – sum of amounts for transactions with `paid: true`.
  - **Total Upcoming** – sum of recurring bills with due date ≥ today.
- Summary section (Paid Bills, Total Upcoming) now shows computed values instead of hardcoded numbers.
- *Note:* “Due Soon” still has a placeholder value ($59.98); can be wired to data next.

### 3. Data (db.json)
- Recurring bill amounts stored as positive numbers (e.g. `100` instead of `-100`) for consistency with how totals are summed.
- Added `paid: true` on some recurring transactions (e.g. Aqua Flow Utilities, EcoFuel Energy) so Paid Bills total reflects real data.

---

## Summary for Slack

- **Transactions API** added and Recurring Bills page now uses it.
- **Recurring Bills** shows live Total Bills, Paid Bills, and Total Upcoming from transaction data.
- **db.json** updated: recurring amounts as positive values and `paid` flag on some bills.

*Generated Feb 20, 2026*
