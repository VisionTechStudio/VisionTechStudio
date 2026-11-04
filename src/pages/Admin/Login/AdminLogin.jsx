import { useState } from 'react';
import { Link } from 'react-router';
import './AdminLogin.css';

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      'Authentication API is not connected yet. Backend integration will be added in the next phase.'
    );
  };

  return (
    <main className="admin-login-page">

      <div className="admin-login-background">
        <span className="admin-login-shape admin-login-shape-one" />
        <span className="admin-login-shape admin-login-shape-two" />
        <span className="admin-login-shape admin-login-shape-three" />
      </div>

      <div className="admin-login-container">

        {/* Brand */}
        <Link to="/" className="admin-login-brand">
          <span className="admin-brand-symbol">V</span>

          <span className="admin-brand-name">
            VISION<span>TECH</span>
            <small>STUDIO ADMINISTRATION</small>
          </span>
        </Link>

        {/* Login Card */}
        <section className="admin-login-card">

          <div className="admin-login-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="10"
                width="16"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M8 10V7a4 4 0 0 1 8 0v3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="15"
                r="1.2"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="admin-login-heading">
            <span className="admin-eyebrow">
              ADMINISTRATION PORTAL
            </span>

            <h1>Welcome Back</h1>

            <p>
              Sign in to access your VisionTechStudio dashboard.
            </p>
          </div>

          <form
            className="admin-login-form"
            onSubmit={handleSubmit}
          >

            <div className="admin-form-group">
              <label htmlFor="admin-email">
                Email Address
              </label>

              <div className="admin-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage('');
                  }}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="admin-form-group">
              <div className="admin-password-label">
                <label htmlFor="admin-password">
                  Password
                </label>
              </div>

              <div className="admin-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="10"
                    width="16"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />

                  <path
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setMessage('');
                  }}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="admin-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 3 21 21M10.6 10.6a2 2 0 0 0 2.8 2.8"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.3 2.3-2.6 3.5M6.2 6.2C4.1 7.5 2.9 9.4 2.5 12c.6 1.5 2.2 3.6 5 4.9 1.4.7 2.9 1.1 4.5 1.1"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {message && (
              <div className="admin-login-message">
                <span>!</span>
                {message}
              </div>
            )}

            <button
              type="submit"
              className="admin-login-submit"
            >
              <span>Sign In to Dashboard</span>

              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </form>

          <div className="admin-login-security">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3 19 6v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />

              <path
                d="m9 12 2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            Secure administration portal
          </div>

        </section>

        <footer className="admin-login-footer">
          © {new Date().getFullYear()} VisionTechStudio.
          All rights reserved.
        </footer>

      </div>
    </main>
  );
}

export default AdminLogin;