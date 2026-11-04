import './AdminDashboard.css';

const statistics = [
  {
    title: 'Total Visitors',
    value: '12,840',
    change: '+12.8%',
    description: 'Compared to last month',
    icon: 'visitors',
    color: 'blue',
    data: [35, 48, 42, 68, 55, 76, 62, 88],
  },
  {
    title: 'Total Inquiries',
    value: '284',
    change: '+8.2%',
    description: 'Compared to last month',
    icon: 'inquiries',
    color: 'sky',
    data: [30, 40, 38, 60, 49, 72, 65, 85],
  },
  {
    title: 'Active Services',
    value: '18',
    change: '+4.5%',
    description: 'Compared to last month',
    icon: 'services',
    color: 'purple',
    data: [42, 38, 52, 48, 66, 59, 78, 85],
  },
  {
    title: 'Published Blogs',
    value: '36',
    change: '+6.1%',
    description: 'Compared to last month',
    icon: 'blogs',
    color: 'orange',
    data: [25, 42, 36, 55, 49, 68, 61, 82],
  },
];

const inquiries = [
  {
    name: 'James Anderson',
    email: 'james@example.com',
    service: 'Social Media Marketing',
    date: 'Nov 04, 2026',
    status: 'New',
    initials: 'JA',
    color: 'blue',
  },
  {
    name: 'Sophia Williams',
    email: 'sophia@example.com',
    service: 'Web Development',
    date: 'Nov 03, 2026',
    status: 'In Progress',
    initials: 'SW',
    color: 'purple',
  },
  {
    name: 'Daniel Brown',
    email: 'daniel@example.com',
    service: 'SEO Optimization',
    date: 'Nov 02, 2026',
    status: 'Completed',
    initials: 'DB',
    color: 'green',
  },
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    service: 'Brand Strategy',
    date: 'Nov 01, 2026',
    status: 'New',
    initials: 'EJ',
    color: 'orange',
  },
];

function DashboardIcon({ name }) {
  const icons = {
    visitors: (
      <>
        <circle cx="9" cy="8" r="4" />
        <path d="M2 20v-1a7 7 0 0 1 14 0v1M16 4a4 4 0 0 1 0 8M18 14a5 5 0 0 1 4 5v1" />
      </>
    ),
    inquiries: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      </>
    ),
    services: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </>
    ),
    blogs: (
      <>
        <path d="M5 3h11l4 4v14H5z" />
        <path d="M15 3v5h5M8 12h8M8 16h8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function MiniChart({ data }) {
  return (
    <div className="admin-mini-chart" aria-hidden="true">
      {data.map((height, index) => (
        <span
          key={index}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function TrafficChart() {
  const bars = [35, 52, 43, 65, 48, 72, 58, 82, 61, 76, 68, 92];

  return (
    <div className="admin-traffic-chart">

      <div className="admin-chart-grid">
        {[100, 75, 50, 25].map((item) => (
          <div className="admin-chart-grid-line" key={item}>
            <span>{item}%</span>
            <div />
          </div>
        ))}
      </div>

      <div className="admin-chart-bars">
        {bars.map((height, index) => (
          <div className="admin-chart-bar-group" key={index}>
            <div
              className="admin-chart-bar"
              style={{ height: `${height}%` }}
              title={`${height}%`}
            />
            <span>
              {[
                'Jan', 'Feb', 'Mar', 'Apr',
                'May', 'Jun', 'Jul', 'Aug',
                'Sep', 'Oct', 'Nov', 'Dec',
              ][index]}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* Welcome */}
      <section className="admin-dashboard-welcome">
        <div>
          <span className="admin-dashboard-eyebrow">
            OVERVIEW
          </span>

          <h2>Welcome to your Dashboard</h2>

          <p>
            Here's what's happening with your website today.
          </p>
        </div>

        <div className="admin-dashboard-live">
          <span />
          Dashboard Overview
        </div>
      </section>

      {/* Statistics */}
      <section className="admin-statistics-grid">

        {statistics.map((stat) => (
          <article
            className="admin-stat-card"
            key={stat.title}
          >

            <div className="admin-stat-top">
              <div className={`admin-stat-icon ${stat.color}`}>
                <DashboardIcon name={stat.icon} />
              </div>

              <MiniChart data={stat.data} />
            </div>

            <p className="admin-stat-title">
              {stat.title}
            </p>

            <div className="admin-stat-value-row">
              <h3>{stat.value}</h3>

              <span className="admin-stat-change">
                {stat.change}
              </span>
            </div>

            <p className="admin-stat-description">
              {stat.description}
            </p>

          </article>
        ))}

      </section>

      {/* Chart and Quick Actions */}
      <section className="admin-dashboard-middle">

        <article className="admin-panel admin-traffic-panel">

          <div className="admin-panel-heading">
            <div>
              <h3>Website Traffic</h3>
              <p>Monthly website performance overview</p>
            </div>

            <span className="admin-panel-period">
              This Year
              <span>⌄</span>
            </span>
          </div>

          <div className="admin-traffic-summary">
            <h2>48,295</h2>
            <span>+14.8% vs last year</span>
          </div>

          <TrafficChart />

        </article>

        <article className="admin-panel admin-quick-panel">

          <div className="admin-panel-heading">
            <div>
              <h3>Quick Actions</h3>
              <p>Manage your website</p>
            </div>
          </div>

          <div className="admin-quick-actions">

            <div className="admin-quick-action">
              <span className="quick-action-icon blue">＋</span>
              <div>
                <strong>Add Service</strong>
                <small>Create a new service</small>
              </div>
              <span className="quick-action-arrow">→</span>
            </div>

            <div className="admin-quick-action">
              <span className="quick-action-icon sky">✎</span>
              <div>
                <strong>Write Blog</strong>
                <small>Publish a new article</small>
              </div>
              <span className="quick-action-arrow">→</span>
            </div>

            <div className="admin-quick-action">
              <span className="quick-action-icon purple">▧</span>
              <div>
                <strong>Add Portfolio</strong>
                <small>Showcase a project</small>
              </div>
              <span className="quick-action-arrow">→</span>
            </div>

            <div className="admin-quick-action">
              <span className="quick-action-icon orange">✉</span>
              <div>
                <strong>View Inquiries</strong>
                <small>Check client messages</small>
              </div>
              <span className="quick-action-arrow">→</span>
            </div>

          </div>

        </article>

      </section>

      {/* Recent Inquiries */}
      <section className="admin-panel admin-inquiries-panel">

        <div className="admin-panel-heading">
          <div>
            <h3>Recent Inquiries</h3>
            <p>Latest messages received from your website</p>
          </div>

          <button
            type="button"
            className="admin-view-all"
            disabled
            title="Inquiries module will be connected later"
          >
            View All <span>→</span>
          </button>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-inquiries-table">

            <thead>
              <tr>
                <th>CLIENT</th>
                <th>SERVICE</th>
                <th>DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.email}>

                  <td>
                    <div className="admin-client-cell">

                      <span className={`admin-client-avatar ${inquiry.color}`}>
                        {inquiry.initials}
                      </span>

                      <span>
                        <strong>{inquiry.name}</strong>
                        <small>{inquiry.email}</small>
                      </span>

                    </div>
                  </td>

                  <td>{inquiry.service}</td>

                  <td>{inquiry.date}</td>

                  <td>
                    <span
                      className={`admin-status-badge ${inquiry.status
                        .toLowerCase()
                        .replace(' ', '-')}`}
                    >
                      <span />
                      {inquiry.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <p className="admin-demo-note">
          Sample dashboard data — real website data will be connected through the backend.
        </p>

      </section>

    </div>
  );
}

export default AdminDashboard