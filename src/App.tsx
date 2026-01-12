import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Pots from "./pages/Pots";
import Recurring from "./pages/RecurringBills";
import Login from "./pages/login";
import Layout from "./components/Layout";
import "./app.css";

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
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
