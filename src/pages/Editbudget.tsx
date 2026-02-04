import { useNavigate } from "react-router-dom";

export default function EditBudget() {
    const navigate = useNavigate();

    return (
        <div className="add-budget">
            <div className="title-control">
                <h1 className="text-preset-1">Edit Budget</h1>
                <button
                    className="cancel-add"
                    onClick={() => navigate("/budgets")}
                >X </button>
            </div>

            <p className="Description text-preset-4">
                As your budgets change, feel free to update your spending limits.
            </p>

            <form className="budget-form">
                <div className="form-group">
                    <p className="text-preset-5-bold">Budget Category</p>

                    <select className="dropdown">
                        <option value="entertainment">Entertainment</option>
                        <option value="bills">Bills</option>
                        <option value="groceries">Groceries</option>
                        <option value="dining-out">Dining out</option>
                        <option value="transportation">Transportation</option>
                        <option value="personal-care">Personal Care</option>
                        <option value="education">Education</option>
                    </select>
                </div>

                <div className="amount-box">
                    <p className="text-preset-5-bold">Maximum Spend</p>
                    <input
                        className="add-amount"
                        type="number"
                        placeholder="$ e.g. 2000"
                    />
                </div>

                <div className="theme-colour">
                    <p className="text-preset-5-bold">Theme</p>

                    <select className="dropdown">
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="cyan">Cyan</option>
                        <option value="navy">Navy</option>
                        <option value="red">Red</option>
                        <option value="purple">Purple</option>
                        <option value="turquoise">Turquoise</option>
                    </select>
                </div>

                <button type="submit" className="submit-button text-preset-4-bold">
                    Save Changes
                </button>
            </form>
        </div>
    );
}
