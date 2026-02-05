import { useNavigate } from "react-router-dom";
import { usePotsInfo } from "../hooks/usePotsInfo"
import { BudgetActions } from "./BudgetActions";

function Pots() {
  const potsInfo = usePotsInfo()
  const Navigate = useNavigate()

  return (
    <div className="page-pots">

      <div className="pot-T-B">
        <h1>Pots</h1>
        <button className="pot-add-button" onClick={() => { Navigate("/AddNewPot") }}>+ Add New Pot</button>
      </div>

      <div className="pots-components">

        {potsInfo.pots.map((pot, index) => {
          const percent = pot.target > 0 ? Math.min(100, (pot.total / pot.target) * 100) : 0;
          const isFirst = index === 0;
          const template = (
            <div className="pots-components-template">
              <div className="pots-components-r1">
                <div className="title-test-preset-2">{pot.name}</div>
                <BudgetActions />
              </div>

              <div className="pots-components-progress-bar">
                <div className="pots-components-progress-bar-details">
                  <div className="text-preset-4">Total Saved</div>
                  <div className="text-preset-1">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pot.total)}
                  </div>
                </div>

                <div>
                  <div className="progress">
                    <div
                      className="progress-fill"
                      style={{ width: `${percent}%`, backgroundColor: pot.theme }}
                    />
                  </div>
                </div>
                <div className="pots-components-progress-bar-details">
                  <div className="text-preset-5-bold">{percent.toFixed(1)}%</div>
                  <div className="text-preset-5">
                    Target of {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pot.target)}
                  </div>
                </div>
              </div>

              <div className="pots-components-buttons">
                <button className="pots-components-each-button">+ Add Money</button>
                <button className="pots-components-each-button">Withdraw</button>
              </div>
            </div>
          );

          return isFirst ? (
            <div key={pot.name} className="pots-components-savings">
              {template}
            </div>
          ) : (
            <div key={pot.name} className="pots-components-gift">
              <div className="pots-components-savings">
                {template}
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Pots;
