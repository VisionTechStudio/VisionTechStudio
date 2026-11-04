import { useState } from 'react';
import { Outlet } from 'react-router';

import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

import './AdminLayout.css';

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-app">

      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="admin-main">

        <AdminHeader
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="admin-content">
          <Outlet />
        </main>

        <footer className="admin-footer">
          <span>
            © {new Date().getFullYear()} VisionTechStudio
          </span>

          <span>
            Admin Dashboard <span className="admin-footer-dot">•</span> v1.0
          </span>
        </footer>

      </div>

    </div>
  );
}

export default AdminLayout;