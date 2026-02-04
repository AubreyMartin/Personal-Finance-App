import { useNavigate } from "react-router-dom";


export default function DeletedBudget() {
    const Navigate = useNavigate()
    return (


        <div className="deleted-budget">

            <div className="title-control">
                <h1 className=" text-preset-1">Delete ‘Entertainment’?</h1>
                <button className="cancel-add" onClick={() => Navigate("/budgets")}>X</button>
            </div>
            <p className="text-preset-4">
                Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.</p>

            <div className="decision-buttons">
                <button type="button" className="deletedbuttons  text-preset-4-bold" onClick={() => Navigate("/budgets")}>
                    Yes, Confirm Deletion
                </button>

                <button type="button" className="goback-buttons  text-preset-4" onClick={() => Navigate("/budgets")}>
                    No, Go Back
                </button></div>

        </div>
    );
}