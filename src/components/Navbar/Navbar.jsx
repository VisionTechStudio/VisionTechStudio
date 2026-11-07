import { NavLink } from 'react-router';
import './Navbar.css';

const navigationItems = [
  { label: 'Home', path: '/', end: true },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about-us' },
  { label: 'Blog', path: '/blogs' },
];

const ctaItem = {
  label: 'Contact Us',
  path: '/contact-us',
  isCTA: true,
};

function Navbar({
  id = 'menu-header-main',
  mobile = false,
  includeCTA = false,
  onNavigate,
}) {
  const items = includeCTA
    ? [...navigationItems, ctaItem]
    : navigationItems;

  return (
    <nav
      className={
        mobile
          ? 'growthlab-navigation growthlab-navigation--mobile'
          : 'growthlab-navigation growthlab-navigation--desktop'
      }
      aria-label={mobile ? 'Mobile navigation' : 'Main navigation'}
    >
      <ul
        id={id}
        className={`growthlab-navigation__list ${
          mobile ? 'is-mobile-navigation' : 'is-desktop-navigation'
        }`}
      >
        {items.map((item) => (
          <li
            key={item.path}
            className={[
              'growthlab-navigation__item',
              item.isCTA ? 'is-cta' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <NavLink
              to={item.path}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'growthlab-navigation__link',
                  isActive ? 'is-active' : '',
                  item.isCTA ? 'is-cta-link' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;