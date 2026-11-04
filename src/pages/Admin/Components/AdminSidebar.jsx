import { NavLink } from 'react-router';

const navigationItems = [
  {
    label: 'OVERVIEW',
    items: [
      {
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: 'dashboard',
      },
    ],
  },
  {
    label: 'WEBSITE MANAGEMENT',
    items: [
      { title: 'Services', icon: 'services' },
      { title: 'Portfolio', icon: 'portfolio' },
      { title: 'Blogs', icon: 'blogs' },
      { title: 'Inquiries', icon: 'inquiries' },
      { title: 'Testimonials', icon: 'testimonials' },
    ],
  },
  {
    label: 'ADMINISTRATION',
    items: [
      { title: 'Users', icon: 'users' },
      { title: 'Settings', icon: 'settings' },
    ],
  },
];

function SidebarIcon({ name }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const icons = {
    dashboard: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
      </>
    ),
    services: (
      <>
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="8.5" />
      </>
    ),
    portfolio: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9" r="1.5" />
        <path d="m21 15-5-5L5 19" />
      </>
    ),
    blogs: (
      <>
        <path d="M5 3h11l4 4v14H5z" />
        <path d="M15 3v5h5M8 12h8M8 16h8" />
      </>
    ),
    inquiries: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      </>
    ),
    testimonials: (
      <>
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.7-1.4-2.4L7.1 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 2Z" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

function AdminSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="admin-sidebar-overlay"
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}

      <aside className={`admin-sidebar ${isOpen ? 'is-open' : ''}`}>

        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-logo">V</div>

          <div className="admin-sidebar-brand-text">
            <strong>
              VISION<span>TECH</span>
            </strong>
            <small>ADMIN PANEL</small>
          </div>

          <button
            type="button"
            className="admin-sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ×
          </button>
        </div>

        <div className="admin-sidebar-divider" />

        <nav className="admin-sidebar-navigation">
          {navigationItems.map((group) => (
            <div className="admin-nav-group" key={group.label}>

              <p className="admin-nav-label">{group.label}</p>

              {group.items.map((item) => (
                item.path ? (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    end
                    onClick={onClose}
                    className={({ isActive }) =>
                      `admin-nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    <SidebarIcon name={item.icon} />
                    <span>{item.title}</span>
                    {item.title === 'Dashboard' && (
                      <span className="admin-nav-active-dot" />
                    )}
                  </NavLink>
                ) : (
                  <div
                    className="admin-nav-link admin-nav-disabled"
                    key={item.title}
                    title="Coming soon"
                  >
                    <SidebarIcon name={item.icon} />
                    <span>{item.title}</span>
                    <span className="admin-nav-soon">Soon</span>
                  </div>
                )
              ))}

            </div>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-help">
            <div className="admin-help-icon">?</div>

            <div>
              <strong>Need assistance?</strong>
              <span>Contact your administrator</span>
            </div>
          </div>

          <div className="admin-sidebar-version">
            VisionTechStudio Admin <span>v1.0</span>
          </div>
        </div>

      </aside>
    </>
  );
}

export default AdminSidebar;