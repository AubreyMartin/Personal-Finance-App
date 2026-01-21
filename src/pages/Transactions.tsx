import { useEffect, useState } from 'react';

import type { Transaction } from '../types';

function Transactions() {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((transationdata: { transactions: Transaction[] }) => {
        setData(transationdata.transactions.slice(0, 10));
      });
  }, []);

  return (

    <div>
      <h1>Transaction</h1>

      <div className="page-transactions">

        {/*=======Input field  page ======== */}
        <div className="transaction-controls">


          <div>
            <input
              type="text"
              placeholder="Search transactions"
              className="transaction-search"
            />
          </div>

          <div className='transaction-controls-dropdown text-preset-4'>Sort by
            <div><select className="transaction-sort">
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
            </select></div>

            Category
            <div>
              <select className="transaction-category" >
                <option value="all">All Transactions</option>
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="travel">Travel</option>
                <option value="shopping">Shopping</option>
              </select> </div>
          </div>
        </div>


        {/*=======Transaction description  ======== */}

        <div className='transaction-description'>
          <p className='transaction-name'>Recipient/Sender</p>
          <div className='transaction-elements'>
            <p className='transaction-elements-category text-preset-5'>Category</p>
            <p className='transaction-elements-transactiondate text-preset-5' >Transaction Date</p>
            <p className='transaction-elements-amount text-preset-5'>Amount</p>
          </div>
        </div>


        {/*=======Transaction Log  ======== */}


        <div className="transaction-log">
          {data.map((transaction, index) => (
            <div className="transaction-row" key={index}>
              <div className="dp-name">
                <img src={transaction.avatar} alt="" className="dp" />
                <p className="label text-preset-4-bold">{transaction.name}</p>
              </div>

              <div className="cta text-preset-5 ">
                <p className="cta-category text-preset-5">  {transaction.category}</p>
                <p className="cta-dates  text-preset-5">
                  {new Date(transaction.date).toLocaleDateString('en-GB',
                    {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}</p>
                <p className="cta-amount text-preset-4-bold"> ${transaction.amount}</p>
              </div>
            </div>
          ))}

        </div>



        {/*=======Transaction footer  ======== */}
        <div className='transaction-footer'>
          <div className='transaction-footer-buttons'>
            <button className='transaction-footer-buttons-pev'> Pev</button>
            <div className='transaction-footer-pages-1-4'>
              <button className='transaction-footer-pages-button' >1</button>
              <button className='transaction-footer-pages-button'>2</button>
              <button className='transaction-footer-pages-button'>3</button>
              <button className='transaction-footer-pages-button'>4</button>
              <button className='transaction-footer-pages-button'>5</button>
            </div>
            <button className='transaction-footer-buttons-next'>Next</button>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Transactions;