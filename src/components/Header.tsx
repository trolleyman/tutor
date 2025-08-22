import { useState } from 'react';
import { fullName, sections } from '../data/tutoring';

const sectionsList = [
  sections.about,
  sections.subjects,
  sections.pricing,
  sections.contact,
]

type NavigationLinkProps = {
  to: string;
  label: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavigationLink({ to, label, className, onClick }: NavigationLinkProps) {
  return <a
    href={to}
    className={className}
    onClick={onClick}
  >
    {label}
  </a>
}

export function handleNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute('href');
  const currentUrl = new URL(window.location.href);
  const targetUrl = new URL(href ?? '', window.location.href);

  // Check if we're navigating to the same page but different anchor
  if (currentUrl.pathname === targetUrl.pathname) {
    const targetId = targetUrl.hash?.slice(1) ?? null;
    const targetElement = targetId ? document.getElementById(targetId) : null;

    event.preventDefault();

    // Account for fixed header height
    const headerHeight = document.getElementById('header-inner')?.clientHeight ?? 0;
    const targetPosition = targetElement ? targetElement.offsetTop - headerHeight : 0;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // TODO: Open the collapsible subject if it exists
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClickClose = (event: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(event);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 text-blue-900 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="header-inner" className="flex justify-between h-16">
          <div className="flex items-center">
            <NavigationLink
              to="/"
              label={fullName}
              className="text-xl font-semibold hover:text-blue-600 transition-colors"
              onClick={handleNavClickClose}
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sectionsList.map(({ id, name }) => (
              <NavigationLink
                key={id}
                to={`#${id}`}
                label={name}
                className="hover:text-blue-600 font-medium transition-colors"
                onClick={handleNavClickClose}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-sm">
            {sectionsList.map(({ id, name }) => (
              <NavigationLink
                key={id}
                to={`#${id}`}
                label={name}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-900 hover:bg-blue-50"
                onClick={handleNavClickClose}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
