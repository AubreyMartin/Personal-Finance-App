import { useEffect, useMemo, useState } from 'react';

import type { Transaction } from '../types';

const ITEMS_PER_PAGE = 10;

function Transactions() {
  const [data, setData] = useState<Transaction[]>([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [category, setCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((transactionData: { transactions: Transaction[] }) => {
        setData(transactionData.transactions);
      });
  }, []);

  const categories = useMemo(() => {
    const set = new Set(data.map((t) => t.category));
    return ['all', ...Array.from(set).sort()];
  }, [data]);

  const filteredAndSorted = useMemo(() => {
    let result = [...data];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) => t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q),
      );
    }

    if (category !== 'all') {
      result = result.filter((t) => t.category === category);
    }

    switch (sortBy) {
      case 'latest':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'highest':
        result.sort((a, b) => b.amount - a.amount);
        break;
      case 'lowest':
        result.sort((a, b) => a.amount - b.amount);
        break;
    }

    return result;
  }, [data, search, category, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE));
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredAndSorted, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sortBy]);

  return (
    <div>
      <h1>Transaction</h1>

      <div className="page-transactions">
        {/*=======Input field  page ======== */}
        <div className="transaction-controls">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search transactions"
              className="transaction-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src="/assets/images/icon-search.svg" alt="search" className="search-icon" />
          </div>

          <div className="transaction-controls-dropdown text-preset-4">
            Sort by
            <div>
              <select
                className="transaction-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="az">A to Z</option>
                <option value="za">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select>
            </div>
            Category
            <div>
              <select
                className="transaction-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Transactions' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/*=======Transaction description  ======== */}

        <div className="transaction-description">
          <p className="transaction-name">Recipient/Sender</p>
          <div className="transaction-elements">
            <p className="transaction-elements-category text-preset-5">Category</p>
            <p className="transaction-elements-transactiondate text-preset-5">Transaction Date</p>
            <p className="transaction-elements-amount text-preset-5">Amount</p>
          </div>
        </div>

        {/*=======Transaction Log  ======== */}

        <div className="transaction-log">
          {paginatedData.map((transaction) => (
            <div
              className="transaction-row"
              key={`${transaction.name}-${transaction.date}-${transaction.amount}`}
            >
              <div className="dp-name">
                <img src={transaction.avatar} alt="" className="dp" />
                <p className="label text-preset-4-bold">{transaction.name}</p>
              </div>

              <div className="cta text-preset-5 ">
                <p className="cta-category text-preset-5"> {transaction.category}</p>
                <p className="cta-dates  text-preset-5">
                  {new Date(transaction.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
                <p className="cta-amount text-preset-4-bold"> ${transaction.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/*=======Transaction footer  ======== */}
        <div className="transaction-footer">
          <div className="transaction-footer-buttons">
            <button
              className="transaction-footer-buttons-pev"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <div className="transaction-footer-pages-1-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`transaction-footer-pages-button ${page === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              className="transaction-footer-buttons-next"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
