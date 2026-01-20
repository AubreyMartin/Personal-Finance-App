{/* <div className="overview-transaction">
        <div>
          <div className="overview-transaction-line1">
            <button className="view-all text-preset-4">View All</button>
          </div>
          {data.map((transaction) => (
            <div className="overview-transaction-line2" key={transaction.id}>
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
      </div> */}