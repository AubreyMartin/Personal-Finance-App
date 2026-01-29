import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import Recurring from "./pages/RecurringBills";
import Login from "./pages/login";
import Layout from "./components/Layout";
import "./app.css";
import AddNewBudget from "./components/AddNewBudget";
import Editbudget from "./components/Editbudget";
import DeletedBudget from "./components/DeletedBudget";
import AddNewPot from "./components/AddNewPot";
import EditPot from "./components/EditPot";
import DeletePot from "./components/DeletePot";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <Overview />
            </Layout>
          }
        />
        <Route
          path="/transactions"
          element={
            <Layout>
              <Transactions />
            </Layout>
          }
        />
        <Route
          path="/budgets"
          element={
            <Layout>
              <Budgets />
            </Layout>
          }
        />
        <Route
          path="/pots"
          element={
            <Layout>
              <Pots />
            </Layout>
          }
        />

        <Route
          path="/recurring"
          element={
            <Layout>
              <Recurring />
            </Layout>
          }
        /> <Route
          path="/AddNewBudget"
          element={
            <Layout>
              <AddNewBudget />
            </Layout>
          }
        />

        <Route
          path="/Editbudget"
          element={
            <Layout>
              <Editbudget />
            </Layout>
          }
        />

        <Route
          path="/DeletedBudget"
          element={
            <Layout>
              <DeletedBudget />
            </Layout>
          }
        />

        <Route
          path="/AddNewPot"
          element={
            <Layout>
              <AddNewPot />
            </Layout>
          }
        />
        <Route
          path="/EditPot"
          element={
            <Layout>
              <EditPot />
            </Layout>
          }
        />

        <Route
          path="/DeletePot"
          element={
            <Layout>
              <DeletePot />
            </Layout>
          }
        />

        {/* <Route
          path="/PieChart"
          element={
            <Layout>
              <PieChart
              />
            </Layout>
          }
        /> */}




      </Routes>



    </BrowserRouter >
  );
}

export default App;
