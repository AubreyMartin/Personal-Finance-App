import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function BudgetActions() {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    return (
        <div className="actions-wrapper">
            <button
                type="button"
                className="controls-dots-button"
                onClick={() => setOpen(prev => !prev)}
            >
                <img src="/assets/images/icon-ellipsis.svg" alt="options" />
            </button>

            {open && (
                <ul className="dropdown-menu">
                    <li onClick={() => navigate("/Editbudget")}>Edit Budget</li>
                    <li onClick={() => navigate("/DeletedBudget")}>Delete Budget</li>
                </ul>
            )}
        </div>
    );
}
