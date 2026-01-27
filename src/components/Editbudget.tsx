import { useNavigate } from "react-router-dom";

export default function Editbudget() {
    const Navigate = useNavigate()
    return (


        <div className="add-budget">
            <div className="title-control">
                <h1 className=" text-preset-1">Edit Budget</h1>
                <button className="cancel-add" onClick={() => { Navigate("/Budgets") }}>X</button>
            </div>


            <p className=" Description text-preset-4">
                As your budgets change, feel free to update your spending limits.</p>

            <form className="budget-form">

                <div className="form-group">
                    <p className="text-preset-5-bold">Budget Category</p>



                    <div className="form-group">

                        <select className="dropdown">

                            <option value="entertainment">Entertainment</option>
                            <option value="bills">Bills</option>
                            <option value="groceries">Groceries</option>
                            <option value="dining out">Dining out</option>
                            <option value="Transportation">Transportation</option>
                            <option value="personalcare">Personal Care</option>
                            <option value="education">Education</option>

                        </select>
                    </div>
                </div>

                <div className="amount-box">
                    <div className="text-preset-5-bold">Maximum Spend</div>
                    <input className=" add-amount" type="number" placeholder="$  e.g.2000" />
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