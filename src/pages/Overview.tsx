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

        <div className="overview-display-pot">
          <div className="overview-pot-row1">
            <h3>Pots</h3>
            <button className="see-details">See Details</button>
          </div>
          {/* Right:  one pots  */}

          <div className="overview-display-pot-row-2">
            <div className="pot-total-saved">
              <div className="pot-total-saved-logo">
                <img
                  src="starter-code/assets/images/icon-pot.svg"
                  alt=" pot-logo"
                />
              </div>

              <div className="pot-total-saved-text">
                <p className="pot-total-lable">Total Saved</p>
                <p className="pot-total-amount">$999</p>
              </div>
            </div>

            {/* center:  two pots  */}
            <div className="overview-display-pot-secound-half">
              <div className="overview-display-pot-c-1">
                <p className="pot-savings-lable">Savings</p>
                <p className="pot-savings-amount">$000</p>
                <p className="pot-gift-label">Gift</p>
                <p className="pot-gift-amount">$000</p>
              </div>

              {/* Right: Last two pots */}

              <div className="overview-display-pot-c-2">
                <p className="pot-Concert-lable">Concert Ticket</p>
                <p className="pot-Concert-amount">$000</p>

                <p className="pot-Laptop-label">New Laptop</p>
                <p className="pot-Laptop-Amount">$000</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>Budgets</h2>
        </div>

        <div className="overview-transaction">
          <div>
            <div className="overview-transaction-line1">
              <p className="  text-preset-2"> Transaction </p>

              <button className="view-all text-preset-4">View All</button>
            </div>

            <div className="overview-transaction-line2">
              <div className="section1">
                <img
                  src="starter-code/assets/images/avatars/emma-richardson.jpg"
                  alt=""
                  className="dp"
                />{" "}
                <p className="label text-preset-4-bold">Emma Richardson </p>
              </div>
              <div className="section2">
                <p className="amount text-preset-4-bold"> $999.50</p>
                <p className="dates  text-preset-5">19 Aug 2024</p>
              </div>
            </div>
            <div className="overview-transaction-line2">
              <div className="section1">
                <img
                  src="starter-code/assets/images/avatars/Savory-Bites-Bistro.jpg"
                  alt=""
                  className="dp"
                />{" "}
                <p className="label text-preset-4-bold">Savory Bites Bistro </p>
              </div>
              <div className="section2">
                <p className="amount text-preset-4-bold"> $65.00</p>
                <p className="dates  text-preset-5">17 Aug 2024</p>
              </div>
            </div>
            <div className="overview-transaction-line2">
              <div className="section1">
                <img
                  src="starter-code/assets/images/avatars/Daniel-Carter.jpg"
                  alt=""
                  className="dp"
                />{" "}
                <p className="label text-preset-4-bold">Daniel Carter </p>
              </div>
              <div className="section2">
                <p className="amount text-preset-4-bold"> $42.30</p>
                <p className="dates  text-preset-5">18 Aug 2024</p>
              </div>
            </div>
            <div className="overview-transaction-line2">
              <div className="section1">
                <img
                  src="starter-code/assets/images/avatars/Sun-Park.jpg"
                  alt=""
                  className="dp"
                />{" "}
                <p className="label text-preset-4-bold">Sun Park </p>
              </div>
              <div className="section2">
                <p className="amount text-preset-4-bold"> $120.00</p>
                <p className="dates  text-preset-5">17 Aug 2024</p>
              </div>
            </div>
            <div className="overview-transaction-line2">
              <div className="section1">
                <img
                  src="starter-code/assets/images/avatars/Urban-Services-Hub.jpg"
                  alt=""
                  className="dp"
                />{" "}
                <p className="label text-preset-4-bold">Urban Services Hub </p>
              </div>
              <div className="section2">
                <p className="amount text-preset-4-bold"> $65.00</p>
                <p className="dates  text-preset-5">17 Aug 2024</p>
              </div>
            </div>
          </div>

          <div>
            <div></div>
          </div>
        </div>
        <div>
          <h2>Recurring Bills</h2>
        </div>
      </div>
    </div>
  );
}

export default Overview;
