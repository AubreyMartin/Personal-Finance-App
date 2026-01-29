import { useEffect, useState } from 'react';
import type { Transaction } from '../types';
import { useNavigate } from "react-router-dom";


function Budgets() {
  const [data, setData] = useState<Transaction[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((transationdata: { transactions: Transaction[] }) => {
        setData(transationdata.transactions.slice(0, 3));
      })
      .catch((error) => {
        console.error('Failed to load transactions data', error);
      });
  }, []);





  return (
    <div className="page budgets">



      <div className="pot-T-B">
        <h1>Budgets</h1>
        <button className="pot-add-button" onClick={() => { navigate("/Addnewbudget") }}> + Add New Budget


        </button>
      </div>

      <div className='budgets-components'>




        <div className='budgets-component-graph'>
          <div className='budgets-component-fig'>
            Graph
          </div>

          <p className='text-preset-2'>Spending Summary</p>
          <div>
            Entertainment
          </div>
          <div>
            Bills
          </div>
          <div>
            Dinning Out
          </div>
          <div>
            Personal care
          </div>
        </div>

        <div>
          <div className="budgets-components-savings">
            <div className="budgets-components-template" >

              <div className="budgets-components-r1">
                <div className="title text-preset-2-bold">Entertainment</div>
                <button className="controls-dots-button"><img src="public/assets/images/icon-ellipsis.svg" alt="" />
                  <div className="form-group">

                    <select className="Dropdown-edit-delete-budget" >

                      <option value="Edit Budget text-preset-4" onSelect={() => { navigate("/Editbudget") }}>Edit Budget</option>
                      <option value="Deleted Budget">Deleted Budget</option>

                    </select>
                  </div>
                </button>
              </div>


              <div className="budgets-components-progress-bar">
                <div className=' text-preset-4'>Maximum of $50.00 </div>

                <div className="progress">
                  <div className="progress-fill" />
                </div>

                <div className="budgets-components-progress-bar-details">

                  <div className='spentline'> Spent
                    <div className=' text-preset-4-bold'>  $15.00</div>
                  </div>

                  <div className='Remainingline'>Remaining
                    <div className=' text-preset-4-bold'> $35.00 </div>
                  </div>
                </div>
              </div>

              <div className="budgets-components-transaction-log">

                <div className="budgets-component-pot-row1">
                  <div className=' text-preset-3'>Latest Spending </div>
                  <button className="see-details text-preset-4">See All
                    <img src="public/assets/images/icon-caret-right.svg" alt="" className='arrowright' />
                  </button>
                </div>

                {data.map((transaction) => (
                  <div className="budgets-transaction-line2" key={transaction.date + transaction.name}>
                    <div className="section1">
                      <img src={transaction.avatar} alt="" className="dp" />
                      <p className=" text-preset-5-bold">{transaction.name}</p>
                    </div>

                    <div className="section2">
                      <p className="amount text-preset-5-bold"> ${transaction.amount}</p>
                      <p className="date  text-preset-5">
                        {new Date(transaction.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>))}
              </div>

            </div>

            <div className="budgets-components-template" >

              <div className="budgets-components-r1">
                <div className="title text-preset-2-bold">Bills</div>
                <button className="controls-dots-button"><img src="public/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="budgets-components-progress-bar">
                <div className=' text-preset-4'>Maximum of $50.00 </div>

                <div className="progress">
                  <div className="progress-fill" />
                </div>

                <div className="budgets-components-progress-bar-details">

                  <div className='spentline'> Spent
                    <div className=' text-preset-4-bold'>  $15.00</div>
                  </div>

                  <div className='Remainingline'>Remaining
                    <div className=' text-preset-4-bold'> $35.00 </div>
                  </div>
                </div>
              </div>

              <div className="budgets-components-transaction-log">

                <div className="budgets-component-pot-row1">
                  <div className=' text-preset-3'>Latest Spending </div>
                  <button className="see-details text-preset-4">See All
                    <img src="public/assets/images/icon-caret-right.svg" alt="" className='arrowright' />
                  </button>
                </div>

                {data.map((transaction) => (
                  <div className="budgets-transaction-line2" key={transaction.date + transaction.name}>
                    <div className="section1">
                      <img src={transaction.avatar} alt="" className="dp" />
                      <p className=" text-preset-5-bold">{transaction.name}</p>
                    </div>

                    <div className="section2">
                      <p className="amount text-preset-5-bold"> ${transaction.amount}</p>
                      <p className="date  text-preset-5">
                        {new Date(transaction.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>))}
              </div>

            </div>

            <div className="budgets-components-template" >

              <div className="budgets-components-r1">
                <div className="title text-preset-2-bold">Dining Out</div>
                <button className="controls-dots-button"><img src="public/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="budgets-components-progress-bar">
                <div className=' text-preset-4'>Maximum of $50.00 </div>

                <div className="progress">
                  <div className="progress-fill" />
                </div>

                <div className="budgets-components-progress-bar-details">

                  <div className='spentline'> Spent
                    <div className=' text-preset-4-bold'>  $15.00</div>
                  </div>

                  <div className='Remainingline'>Remaining
                    <div className=' text-preset-4-bold'> $35.00 </div>
                  </div>
                </div>
              </div>

              <div className="budgets-components-transaction-log">

                <div className="budgets-component-pot-row1">
                  <div className=' text-preset-3'>Latest Spending </div>
                  <button className="see-details text-preset-4">See All
                    <img src="public/assets/images/icon-caret-right.svg" alt="" className='arrowright' />
                  </button>
                </div>

                {data.map((transaction) => (
                  <div className="budgets-transaction-line2" key={transaction.date + transaction.name}>
                    <div className="section1">
                      <img src={transaction.avatar} alt="" className="dp" />
                      <p className=" text-preset-5-bold">{transaction.name}</p>
                    </div>

                    <div className="section2">
                      <p className="amount text-preset-5-bold"> ${transaction.amount}</p>
                      <p className="date  text-preset-5">
                        {new Date(transaction.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>))}
              </div>

            </div>


            <div className="budgets-components-template" >

              <div className="budgets-components-r1">
                <div className="title text-preset-2-bold">Personal Care</div>
                <button className="controls-dots-button"><img src="public/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="budgets-components-progress-bar">
                <div className=' text-preset-4'>Maximum of $50.00 </div>

                <div className="progress">
                  <div className="progress-fill" />
                </div>

                <div className="budgets-components-progress-bar-details">

                  <div className='spentline'> Spent
                    <div className=' text-preset-4-bold'>  $15.00</div>
                  </div>

                  <div className='Remainingline'>Remaining
                    <div className=' text-preset-4-bold'> $35.00 </div>
                  </div>
                </div>
              </div>

              <div className="budgets-components-transaction-log">

                <div className="budgets-component-pot-row1">
                  <div className=' text-preset-3'>Latest Spending </div>
                  <button className="see-details text-preset-4">See All
                    <img src="public/assets/images/icon-caret-right.svg" alt="" className='arrowright' />
                  </button>
                </div>

                {data.map((transaction) => (
                  <div className="budgets-transaction-line2" key={transaction.date + transaction.name}>
                    <div className="section1">
                      <img src={transaction.avatar} alt="" className="dp" />
                      <p className=" text-preset-5-bold">{transaction.name}</p>
                    </div>

                    <div className="section2">
                      <p className="amount text-preset-5-bold"> ${transaction.amount}</p>
                      <p className="date  text-preset-5">
                        {new Date(transaction.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Budgets;
