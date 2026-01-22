import { useEffect, useState } from 'react';
import type { Transaction } from '../types';


function Recurring() {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((transationdata: { transactions: Transaction[] }) => {

        setData(transationdata.transactions);
      });
  }, []);


  return (
    <div>
      <h1 className="title">Recurring Bills</h1>

      <div className="page-recurring">

        <div className="total-summary">
          <div className="page-recurring-totalbills">
            <div className="page-recurring-totalbills-icon">  <img src="public/assets/images/icon-recurring-bills.svg" alt="" />
            </div>
            <div>
              <h3 className=' text-preset-4'>Total Bills</h3>
              <div className=' text-preset-1'>$384.98</div>
            </div>
          </div>
          <div className="page-recurring-summary">
            <div className=' text-preset-3'>Summary</div>
            <div className="page-recurring-summary-PB" >
              <div className=' text-preset-5'>Paid Bills </div>
              <div className=' text-preset-5-bold'>4 ($190.00)</div></div>
            <div className="page-recurring-summary-PB">
              <div className=' text-preset-5' >Total Upcoming </div>
              <div className=' text-preset-5-bold'>4 ($194.98)</div></div>
            <div className="page-recurring-summary-PB">
              <div className=' text-preset-5' >Due Soon </div>
              <div className=' text-preset-5-bold'>$2 ($59.98)</div>
            </div>
          </div>
        </div>

        <div className="page-recurring-billslogs">



          <div className="page-recurring-controls">

            <div>
              <input
                type="text"
                placeholder="Search transactions"
                className="recurring-search"
              />
            </div>

            <div className='recurring-controls-dropdown text-preset-4'>Sort by
              <div><select className="transaction-sort">
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="az">A to Z</option>
                <option value="za">Z to A</option>
                <option value="highest">Highest</option>
                <option value="lowest">Lowest</option>
              </select></div>
            </div>
          </div>

          <div className='recurring-descriptions'>
            <p className='recurring-elements-bill-title text-preset-5'>Bill Title</p>
            <p className='recurring-elements-due-date text-preset-5' >Due Date</p>
            <p className='recurring-elements-amount text-preset-5'>Amount</p>
          </div>










          <div className="recurring-log">
            {data
              .filter(transaction => transaction.recurring)

              .map((transaction, index) => (
                <div className="recurring-row" key={index}>

                  <div className="recurring-dp-name">
                    <img src={transaction.avatar} alt="" className="dp" />
                    <p className="label text-preset-4-bold">{transaction.name}</p>
                  </div>

                  <div className="recurring-row-cta text-preset-5 ">
                    <p className="cta-dates text-preset-5">
                      Monthly – {new Date(transaction.date).getDate()}
                      {['th', 'st', 'nd', 'rd'][((new Date(transaction.date).getDate() + 90) % 100 - 10) % 10] || 'th'}
                    </p>

                    <p className="cta-amount text-preset-4-bold"> ${transaction.amount}</p>
                  </div>
                </div>
              ))}

          </div>




        </div>

      </div>
    </div >
  );
}

export default Recurring
  ;
