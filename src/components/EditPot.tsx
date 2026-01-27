import { useNavigate } from "react-router-dom";

export default function EditPot() {
    const Navigate = useNavigate()
    return (


        <div className="add-budget">
            <div className="title-control">
                <h1 className=" text-preset-1">Edit Pot</h1>
                <button className="cancel-add" onClick={() => { Navigate("/Budgets") }}>X</button>
            </div>


            <p className=" Description text-preset-4">
                If your saving targets change, feel free to update your pots.</p>

            <form className="budget-form">

                <div className="form-group">
                    <p className="text-preset-5-bold">Pot Name</p>



                    <div className="form-group">
                        <input className=" add-amount" type="number" placeholder="Concert Ticket" />
                        <p>16 characters left</p>


                    </div>
                </div>

                <div className="amount-box">
                    <div className="text-preset-5-bold">Target</div>
                    <input className=" add-amount" type="number" placeholder="$  110.00" />
                </div>


                <div className="theme-colour">
                    <p className="text-preset-5-bold">Theme</p>

                    <div className="theme-colour">

                        <select className="dropdown">
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Cyan">Cyan</option>
                            <option value="Navy">Navy</option>
                            <option value="Red">Red</option>
                            <option value="Purple">Purple</option>
                            <option value="Turquoise">Turquoise</option>
                        </select>
                    </div>
                </div>


            </form>
            <button type="submit" className="submit-button text-preset-4-bold">
                Save Changes            </button>
        </div>
    );
}