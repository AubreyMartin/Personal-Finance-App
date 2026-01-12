import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [isMinimized, setIsMinimized] = useState(false);

  const navItems = [
    {
      path: "/",
      label: "Overview",
      icon: "/assets/images/icon-nav-overview.svg",
    },
    {
      path: "/transactions",
      label: "Transactions",
      icon: "/assets/images/icon-nav-transactions.svg",
    },
    {
      path: "/budgets",
      label: "Budgets",
      icon: "/assets/images/icon-nav-budgets.svg",
    },
    { path: "/pots", label: "Pots", icon: "/assets/images/icon-nav-pots.svg" },
    {
      path: "/recurring",
      label: "Recurring Bills",
      icon: "/assets/images/icon-nav-recurring-bills.svg",
    },
  ];

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <aside className={`sidebar ${isMinimized ? "sidebar--minimized" : ""}`}>
      <div>
        <img
          src="/assets/images/logo-large.svg"
          alt="logo-large"
          className="logo-large"
        />
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="sidebar-nav-item">
              <Link
                to={item.path}
                className={`sidebar-nav-link ${
                  location.pathname === item.path
                    ? "sidebar-nav-link--active"
                    : ""
                }`}
                title={isMinimized ? item.label : ""}
              >
                <img src={item.icon} alt="" className="sidebar-nav-icon" />
                {!isMinimized && (
                  <span className="sidebar-nav-label">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
          <li className="sidebar-nav-item">
            <button
              className="sidebar-nav-link sidebar-nav-link--minimize"
              onClick={toggleMinimize}
              aria-label={isMinimized ? "Expand menu" : "Minimize menu"}
              title={isMinimized ? "Expand menu" : "Minimize menu"}
            >
              <img
                src="/assets/images/icon-minimize-menu.svg"
                alt={isMinimized ? "Expand" : "Minimize"}
                className="sidebar-nav-icon"
              />
              {!isMinimized && (
                <span className="sidebar-nav-label">Minimize Menu</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
