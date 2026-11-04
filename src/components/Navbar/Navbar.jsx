import { NavLink } from 'react-router'
import './Navbar.css'

const navigationItems = [
  { label: 'Home', path: '/', end: true },
  { label: 'Services', path: '/services' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'About Us', path: '/about-us' },
]

const ctaItem = {
  label: 'Contact Us',
  path: '/contact-us',
  isCTA: true,
}

function Navbar({
  id = 'menu-header-main',
  mobile = false,
  includeCTA = false,
  onNavigate,
}) {
  const navigationClass = mobile
    ? 'pxl-header-nav'
    : 'pxl-nav-menu pxl-nav-menu1 pxl-mega-full-width pxl-nav-horizontal fr-style-default show-effect-slideup sub-style-default'

  const items = includeCTA
    ? [...navigationItems, ctaItem]
    : navigationItems

  return (
    <nav
      className={navigationClass}
      aria-label={mobile ? 'Mobile navigation' : 'Main navigation'}
    >
      <div className="menu-header-main-container">
        <ul
          id={id}
          className={`pxl-menu-primary clearfix${mobile ? ' is-mobile-navigation' : ' is-desktop-navigation'}`}
        >
          {items.map((item) => (
            <li
              className={[
                'menu-item',
                item.end ? 'menu-item-home' : '',
                item.isCTA ? 'menu-item-cta' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={item.path}
            >
              <NavLink
                to={item.path}
                end={item.end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  [
                    isActive ? 'pxl-onepage-active' : '',
                    item.isCTA ? 'pxl-menu-cta' : '',
                  ]
                    .filter(Boolean)
                    .join(' ') || undefined
                }
              >
                {mobile ? (
                  <span>{item.label}</span>
                ) : (
                  <span className="pxl-menu-item-text">
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar