
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function BrandLogo({ mobile = false, onClick }) {
  return (
    <Link
      to="/"
      className={
        mobile
          ? 'site-header__mobile-brand'
          : 'site-header__brand'
      }
      aria-label="VisionTechStudio home"
      onClick={onClick}
    >
      <span className="site-header__brand-mark" aria-hidden="true">
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M5 8H29V15H20V40H12V15H5V8Z"
            fill="#14213D"
          />
          <path
            d="M23 15H31L36 28L41 15H48L39 40H33L23 15Z"
            fill="#2563EB"
          />
          <circle
            cx="38"
            cy="8"
            r="3.5"
            fill="#60A5FA"
          />
        </svg>
      </span>

      <span className="site-header__brand-name">
        <span className="site-header__brand-primary">
          VisionTech
        </span>
        <span className="site-header__brand-accent">
          Studio
        </span>
      </span>
    </Link>
  )
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const previousBodyOverflow = document.body.style.overflow

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      id="pxl-header-elementor"
      className="site-header site-header--modern is-sticky"
    >
      <div className="site-header__main">
        <div className="site-header__container">
          <BrandLogo />

          <div className="site-header__desktop-navigation">
            <Navbar id="menu-header-main" />
          </div>

          <div className="site-header__actions">
            <button
              type="button"
              className="site-header__action-search"
              aria-label="Search"
            >
              <span className="site-header__search-kbd">
                <svg
                  className="site-header__search-kbd-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 4a3 3 0 0 1 3 3v10a3 3 0 1 1-3-3h8a3 3 0 1 1-3 3V7a3 3 0 1 1 3-3H8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                K
              </span>
              <svg
                className="site-header__search-icon"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M17 17L13.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span className="site-header__action-divider" aria-hidden="true" />

            <Link to="/contact-us" className="site-header__action-link">
              Contact Us
            </Link>
            <Link to="/contact-us" className="site-header__action-secondary">
              Get a Quote
            </Link>
            <Link to="/contact-us" className="site-header__action-cta">
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            className={`site-header__menu-toggle${isMobileMenuOpen ? ' is-open' : ''}`}
            aria-label={
              isMobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-mobile-navigation"
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="site-mobile-navigation"
        className={`site-header__mobile-panel${isMobileMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <div className="site-header__mobile-panel-inner">
          <div className="site-header__mobile-panel-header">
            <BrandLogo mobile onClick={closeMobileMenu} />

            <button
              type="button"
              className="site-header__mobile-close"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            >
              <span />
              <span />
            </button>
          </div>

          <div className="site-header__mobile-navigation">
            <Navbar
              id="menu-header-main-mobile"
              mobile
              includeCTA
              onNavigate={closeMobileMenu}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`site-header__backdrop${isMobileMenuOpen ? ' is-open' : ''}`}
        aria-label="Close navigation menu"
        tabIndex={isMobileMenuOpen ? 0 : -1}
        disabled={!isMobileMenuOpen}
        onClick={closeMobileMenu}
      />
    </header>
  )
}

export default Header
