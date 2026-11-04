import { useLocation, useNavigate } from 'react-router';

function AdminHeader({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitles = {
    '/admin/dashboard': {
      title: 'Dashboard',
      subtitle: 'Overview of your website performance',
    },
  };

  const currentPage = pageTitles[location.pathname] || {
    title: 'Administration',
    subtitle: 'Manage your website',
  };

  const handleLogout = () => {
    navigate('/admin/login');
  };

  return (
    <header className="admin-header">

      <div className="admin-header-left">

        <button
          type="button"
          className="admin-menu-toggle"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="admin-header-title">
          <h1>{currentPage.title}</h1>
          <p>{currentPage.subtitle}</p>
        </div>

      </div>

      <div className="admin-header-actions">

        <div className="admin-header-date">
          <svg viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="5"
              width="18"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M16 3v4M8 3v4M3 10h18"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>

          <span>
            {new Date().toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        <div className="admin-header-divider" />

        <button
          type="button"
          className="admin-header-profile"
          onClick={handleLogout}
          title="Open login page"
        >
          <span className="admin-profile-avatar">A</span>

          <span className="admin-profile-details">
            <strong>Administrator</strong>
            <small>Admin Account</small>
          </span>

          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="m7 10 5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>

    </header>
  );
}

export default AdminHeader;