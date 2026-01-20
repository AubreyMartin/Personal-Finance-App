import { useEffect, useState } from 'react';

type Transaction = {
  id: string | number;
  avatar: string;
  name: string;
  amount: number;
  date: string;
  category: string;
};

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
        <div className="transaction-inputfield">
          <div>Search transaction</div>

          <div className='transaction-inputfield-dropdown'>
            <div>Sort by</div>
            <div>Category</div>
          </div>
        </div>


        {/*=======Transaction description  ======== */}

        <div className='transaction-description'>
          <p>Recipient/Sender</p>
          <p>Category</p>
          <p>Transaction Date</p>
          <p>Amount</p></div>


        {/*=======Transaction Log  ======== */}


        <div className="transaction-log">
          {data.map((transaction) => (


            <div className="dp-name" key={transaction.id}>
              <div>
                <img src={transaction.avatar} alt="" className="dp" />
                <p className="label text-preset-4-bold">{transaction.name}</p>
              </div>

              <div className="cta text-preset-5 ">
                <p className="category text-preset-5"> Category</p>
                <p className="dates  text-preset-5">
                  {new Date(transaction.date).toLocaleDateString('en-GB',
                    {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}</p>
                <p className="amount text-preset-4-bold"> ${transaction.amount}</p>
              </div>
            </div>
          ))}

        </div>





      </div>
      {/*=======Transaction footer  ======== */}
      <div className='transaction-footer'>
        <button> Pev</button>
        <div >
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>Next</button>
      </div>
    </div >
  );
}

export default Transactions;