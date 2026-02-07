import { useNavigate, useSearchParams } from "react-router-dom";


export default function Deleted() {
    const Navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name")
    const from = searchParams.get("from")
    const fromText = { "/pots": "Pot", "/budgets": "Budget" };


    return (


        <div className="deleted-budget">

            <div className="title-control">
                <h1 className=" text-preset-1">Delete {name}?</h1>
                <button className="cancel-add" onClick={() => Navigate(from)}>X</button>
            </div>
            <p className="text-preset-4">
                Are you sure you want to delete this {fromText[from]}? This action cannot be reversed, and all the data inside it will be removed forever.</p>

            <div className="decision-buttons">
                <button type="button" className="deletedbuttons  text-preset-4-bold" onClick={() => Navigate(from)}>
                    Yes, Confirm Deletion
                </button>

                <button type="button" className="goback-buttons  text-preset-4" onClick={() => Navigate(from)}>
                    No, Go Back
                </button></div>

        </div>
    );
}