import { useNavigate } from "react-router-dom";


export default function AddNewPot() {
    const Navigate = useNavigate()

    return (

        <div className="add-budget">
            <div className="title-control">
                <h1 className=" text-preset-1">Add New Pot</h1>
                <button className="cancel-add" onClick={() => { Navigate("/Pots") }}>X</button>
            </div>

            <p className="Description text-preset-4">
                Create a pot to set savings targets. These can help keep you on track as you save for special purchases.</p>

            <form className="budget-form">

                <div className="form-group">
                    <p className="text-preset-5-bold">Pot Name</p>


                    <input className=" add-amount" type="number" placeholder="e.g. Rainy Days" />
                    <p>30 characters left</p>
                </div>

                <div className="amount-box">
                    <div className=" text-preset-5-bold">Target</div>
                    <input className=" add-amount" type="number" placeholder="     $  e.g.2000" />
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
                Add Budget
            </button>
        </div >
    );
}