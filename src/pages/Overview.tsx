import { useEffect, useState } from 'react';
import type { Transaction, Balance } from '../types';
import { useNavigate } from 'react-router-dom';
import { usePotsInfo } from '../hooks/usePotsInfo';
import PieChartOverview from '../components/PieChartOverview';

function Overview() {
  const [balance, setBalance] = useState<Balance>({ current: 0, income: 0, expenses: 0 });

  const [data, setData] = useState<Transaction[]>([]);

  const Navigate = useNavigate();
  const potsInfo = usePotsInfo();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((transationdata: { transactions: Transaction[]; balance?: Balance }) => {
        setData(transationdata.transactions.slice(0, 5));
        if (transationdata.balance) {
          setBalance(transationdata.balance);
        }
      })
      .catch((error) => {
        console.error('Failed to load transactions data', error);
      });
  }, []);

  return (
    <div className="page overview">
      <h1>Overview</h1>

      <div className="overview-card">
        <div className="row1">
          <div className="CB">
            <h2 className=" text-preset-4">Current Balance</h2>
            <p className=" text-preset-1">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(balance.current)}
            </p>
          </div>

          <div className="displayincome">
            <h2 className=" text-preset-4">Income</h2>
            <p className=" text-preset-1">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(balance.income)}
            </p>
          </div>

          <div className="displayincome">
            <h2 className=" text-preset-4">Expenses</h2>
            <p className=" text-preset-1">
              {' '}
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(balance.expenses)}
            </p>
          </div>
        </div>

        <div className="overview-cluster">
          {/* Right:  one pots  */}

          <div className="overview-c1">
            <div className="overview-pot">
              <div className="overview-pot-row1">
                <div className=" text-preset-2">Pots</div>

                <button
                  className="see-details text-preset-4"
                  onClick={() => {
                    Navigate('/Pots');
                  }}
                >
                  See Details
                  <img src="/assets/images/icon-caret-right.svg" alt="" className="arrowright" />
                </button>
              </div>

              <div className="overview-display-pot-row-2">
                <div className="pot-total-saved">
                  <div className="pot-total-saved-logo">
                    <img src="/assets/images/icon-pot.svg" alt=" pot-logo" />
                  </div>

                  <div className="pot-total-saved-text">
                    <p className="pot-total-lable text-preset-4 ">Total Saved</p>
                    <p className="pot-total-amount text-preset-1 ">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(potsInfo.totalSaved)}
                    </p>
                  </div>
                </div>

                {/* center:  two pots  */}
                <div className="overview-display-pot-row-2-secound-half">
                  <div className="overview-display-pot-c-1">
                    <div className="pot-savings-lable">
                      <p className="pot-savings- text-preset-5 ">Savings</p>
                      <p className="pot-savings-amounts text-preset-4-bold">$159</p>
                    </div>

                    <div className="pot-Concert">
                      <p className="pot-Concert-lable text-preset-5">Concert Ticket</p>
                      <p className="pot-Concert-amount text-preset-4-bold">$110</p>
                    </div>
                  </div>

                  {/* Right: Last two pots */}

                  <div className="overview-display-pot-c-2">
                    <div className="pot-gift">
                      <p className="pot-gift-label text-preset-5">Gift</p>
                      <p className="pot-gift-amount text-preset-4-bold">$40</p>
                    </div>

                    <div className="pot-Laptop">
                      <p className="pot-Laptop-label text-preset-5">New Laptop</p>
                      <p className="pot-Laptop-Amount text-preset-4-bold">$10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overviwe Transaction  */}
            <div className="overview-transaction">
              <div>
                <div className="overview-transaction-line1">
                  <p className=" text-preset-2"> Transaction </p>
                  <button
                    className="view-all text-preset-4"
                    onClick={() => {
                      Navigate('/transactions');
                    }}
                  >
                    View All
                    <img src="/assets/images/icon-caret-right.svg" alt="" className="arrowright" />
                  </button>
                </div>

                {data.map((transaction) => (
                  <div
                    className="overview-transaction-line2"
                    key={transaction.date + transaction.name}
                  >
                    <div className="section1">
                      <img src={transaction.avatar} alt="" className="dp" />
                      <p className="label text-preset-4-bold">{transaction.name}</p>
                    </div>
                    <div className="section2">
                      <p className="amount text-preset-4-bold"> ${transaction.amount}</p>

                      <p className="dates  text-preset-5">
                        {new Date(transaction.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 budget & Recurring  */}
          <div className="overview-c2">
            <div className="overview-budgets">
              <div className="overview-budgets-row1">
                <h2>Budgets</h2>
                <button
                  className="see-details"
                  onClick={() => {
                    Navigate('/budgets');
                  }}
                >
                  See Details
                  <img src="/assets/images/icon-caret-right.svg" alt="" className="arrowright" />
                </button>
              </div>
              <div>
                <PieChartOverview />
              </div>
            </div>

            <div className="overview-recurring-bill">
              <div className="overview-recurring-bill-row1">
                <h3>Recurring Bills</h3>
                <button
                  className="see-details"
                  onClick={() => {
                    Navigate('/recurring');
                  }}
                >
                  {' '}
                  See Details
                  <img src="/assets/images/icon-caret-right.svg" alt="" className="arrowright" />
                </button>
              </div>

              <div className="overview-recurring-bill-list">
                <div className="paid-bills">
                  <p>Paid Bills</p>
                  <p className="amount text-preset-4-bold">$190 </p>
                </div>

                <div className="total-upcoming">
                  <div>Total Upcoming</div>
                  <p className="amount text-preset-4-bold">$190 </p>
                </div>

                <div className="due-soon">
                  <div>Due Soon</div>
                  <p className="amount text-preset-4-bold">$190 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
