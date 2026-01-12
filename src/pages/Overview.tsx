function Overview() {
  return (
    <div className="page overview">
      <h1>Overview</h1>

      <div className="overview-card">
        <div className="row1">
          <div className="CB">
            <h2>Current Balance</h2>
            <p>$4,836.00</p>
          </div>

          <div className="displayincome">
            <h2>Income</h2>
            <p>$3,814.25</p>
          </div>

          <div className="displayExp">
            <h2>Expenses</h2>
            <p>$1,700.50</p>
          </div>
        </div>

        <div className="overviewdisplaypot">
          <h2>Pots</h2>
          <button>See Details</button>
          <p>Total Saved</p>
          <p>Savings</p>
          <p>Gift</p>
          <p>Concert Ticket</p>
          <p>New Laptop</p>
        </div>
        <div>
          <h2>Budgets</h2>
        </div>
        <div>
          <h2>Transaction</h2>
        </div>
        <div>
          <h2>Recurring Bills</h2>
        </div>
      </div>
    </div>
  );
}

export default Overview;
