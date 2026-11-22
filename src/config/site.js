const phone = '+92 322 5396617';

export const site = {
  name: 'Vision Tech Studio',
  logo: '/assets/vision-tech-studio-logo.png',
  phone,
  whatsapp: `https://wa.me/${phone.replace(/\D/g, '')}`,
  social: {
    Instagram: 'https://www.instagram.com/visiontech._.studio/',
    LinkedIn: 'https://www.linkedin.com/company/vision-tech-studio/',
  },
};

export const navigation = [
  { label: 'Home', href: '/#home', section: 'home' },
  { label: 'Services', href: '/#services', section: 'services' },
  { label: 'Work', href: '/#work', section: 'work' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
