import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="layout-header" aria-label="App branding">
        <img src="/assets/images/logo-large.svg" alt="Personal Finance" className="layout-header-logo" />
      </header>
      <Sidebar />
      <BottomNav />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
