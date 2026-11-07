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
      <img
        src="/Logo.png"
        alt="VisionTechStudio"
        className="site-header__logo"
      />

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
            <Link
              to="/contact-us"
              className="site-header__action-cta"
            >
              Contact Us
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
            <BrandLogo
              mobile
              onClick={closeMobileMenu}
            />

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