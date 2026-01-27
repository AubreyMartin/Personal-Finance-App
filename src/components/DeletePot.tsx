import { useNavigate } from "react-router-dom";


export default function DeletedPot() {
    const Navigate = useNavigate()
    return (


        <div className="deleted-budget">

            <div className="title-control">
                <h1 className=" text-preset-1">Delete ‘Savings’?</h1>
                <button className="cancel-add" onClick={() => { Navigate("/Budgets") }}>X</button>
            </div>
            <p className="text-preset-4">
                Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.</p>

            <div className="decision-buttons">
                <button type="submit" className="deletedbuttons  text-preset-4-bold">
                    Yes, Confirm Deletion
                </button>

                <button type="submit" className="goback-buttons  text-preset-4">
                    No, I want to go back
                </button></div>

        </div>
    );
}