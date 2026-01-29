import { useNavigate } from "react-router-dom";
import { usePotsInfo } from "../hooks/usePotsInfo"

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
        <div className="pots-components-savings">
          <div className="pots-components-template" >
            <div className="pots-components-r1">
              <div className="title-test-preset-2">{potsInfo.pots[0]?.name}</div>
              <button className="controls-dots-button"><img src="/assets/images/icon-ellipsis.svg" alt="" /></button>
            </div>


            <div className="pots-components-progress-bar">
              <div className="pots-components-progress-bar-details">
                <div className=' text-preset-4'>Total Saved </div>
                <div className=' text-preset-1'>{new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(potsInfo.pots[0]?.total)} </div>
              </div>


              <div>
                Bar
              </div>
              <div className="pots-components-progress-bar-details">
                <div className=' text-preset-5-bold'>7.95%</div>
                <div className=' text-preset-5'>Target of $2,000 </div>
              </div>
            </div>

            <div className="pots-components-buttons">
              <button className="pots-components-each-button ">+ Add Money</button>
              <button className="pots-components-each-button ">Withdraw</button>
            </div>

          </div>
        </div>


        { /* =========================2nd ========================= */}
        { /* =========================Concert Ticket ========================= */}
        <div className="pots-components-gift">
          <div className="pots-components-savings">
            <div className="pots-components-template" >
              <div className="pots-components-r1">
                <div className="title-test-preset-2">Concert Ticket</div>
                <button className="controls-dots-button"><img src="/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="pots-components-progress-bar">
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-4'>Total Saved </div>
                  <div className=' text-preset-1'>$110.00 </div>
                </div>
                <div>
                  Bar
                </div>
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-5-bold'>73.3%</div>
                  <div className=' text-preset-5'>Target of $150 </div>
                </div>
              </div>

              <div className="pots-components-buttons">
                <button className="pots-components-each-button ">+ Add Money</button>
                <button className="pots-components-each-button ">Withdraw</button>
              </div>

            </div>
          </div>
        </div>

        { /* =========================Gift  ========================= */}

        <div className="pots-components-gift">
          <div className="pots-components-savings">
            <div className="pots-components-template" >
              <div className="pots-components-r1">
                <div className="title-test-preset-2">Gift</div>
                <button className="controls-dots-button"><img src="/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="pots-components-progress-bar">
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-4'>Total Saved </div>
                  <div className=' text-preset-1'>$40.00 </div>
                </div>
                <div>
                  Bar
                </div>
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-5-bold'>66.6%</div>
                  <div className=' text-preset-5'>Target of $60 </div>
                </div>
              </div>

              <div className="pots-components-buttons">
                <button className="pots-components-each-button ">+ Add Money</button>
                <button className="pots-components-each-button ">Withdraw</button>
              </div>

            </div>
          </div>
        </div>





        { /* =========================New Laptop  ========================= */}


        <div className="pots-components-gift">
          <div className="pots-components-savings">
            <div className="pots-components-template" >
              <div className="pots-components-r1">
                <div className="title-test-preset-2">New Laptop</div>
                <button className="controls-dots-button"><img src="/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="pots-components-progress-bar">
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-4'>Total Saved </div>
                  <div className=' text-preset-1'>$10.00 </div>
                </div>
                <div>
                  Bar
                </div>
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-5-bold'>1.0%</div>
                  <div className=' text-preset-5'>Target of $1000 </div>
                </div>
              </div>

              <div className="pots-components-buttons">
                <button className="pots-components-each-button ">+ Add Money</button>
                <button className="pots-components-each-button ">Withdraw</button>
              </div>

            </div>
          </div>
        </div>


        { /* =========================Holiday  ========================= */}

        <div className="pots-components-gift">
          <div className="pots-components-savings">
            <div className="pots-components-template" >
              <div className="pots-components-r1">
                <div className="title-test-preset-2">Holiday</div>
                <button className="controls-dots-button"><img src="/assets/images/icon-ellipsis.svg" alt="" /></button>
              </div>


              <div className="pots-components-progress-bar">
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-4'>Total Saved </div>
                  <div className=' text-preset-1'>$531.00 </div>
                </div>
                <div>
                  Bar
                </div>
                <div className="pots-components-progress-bar-details">
                  <div className=' text-preset-5-bold'>36.8%</div>
                  <div className=' text-preset-5'>Target of $1440 </div>
                </div>
              </div>

              <div className="pots-components-buttons">
                <button className="pots-components-each-button ">+ Add Money</button>
                <button className="pots-components-each-button ">Withdraw</button>
              </div>

            </div>
          </div>
        </div>

      </div>











    </div >
  );
}

export default Pots;
