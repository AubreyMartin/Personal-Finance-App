import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Actions(props: { name: string, from: string, edit: string }) {
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const from = { "/pots": "Pot", "/budgets": "Budget" };

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
                    <li onClick={() => navigate(props?.edit)}>Edit {from[props?.from]}
                    </li>
                    <li onClick={() => navigate("/Deleted?name=" + props?.name + "&from=" + props?.from)}>Delete {from[props?.from]}
                    </li>
                </ul>
            )}
        </div>
    );
}
