import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Overview', icon: '/assets/images/icon-nav-overview.svg' },
  { path: '/transactions', label: 'Transactions', icon: '/assets/images/icon-nav-transactions.svg' },
  { path: '/budgets', label: 'Budgets', icon: '/assets/images/icon-nav-budgets.svg' },
  { path: '/pots', label: 'Pots', icon: '/assets/images/icon-nav-pots.svg' },
  { path: '/recurring', label: 'Recurring', icon: '/assets/images/icon-nav-recurring-bills.svg' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <ul className="bottom-nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="bottom-nav-item">
            <Link
              to={item.path}
              className={`bottom-nav-link ${location.pathname === item.path ? 'bottom-nav-link--active' : ''}`}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              <img src={item.icon} alt="" className="bottom-nav-icon" />
              <span className="bottom-nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
