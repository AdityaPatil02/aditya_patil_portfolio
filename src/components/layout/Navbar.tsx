import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/common/Logo';
import { navItems } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-gold-400/15 bg-ink/95 py-3 shadow-card backdrop-blur-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8" aria-label="Main navigation">
          <a href="#home" onClick={closeMenu} aria-label="Aditya Patil home" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative block px-3 py-2 text-sm tracking-wide transition duration-300 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold-300 after:transition-transform after:duration-500 hover:text-gold-200 ${
                      isActive
                        ? 'text-gold-200 after:scale-x-100'
                        : 'text-stone-300 after:scale-x-0 hover:after:scale-x-100'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-gold hidden px-5 py-2.5 sm:inline-flex">
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 text-gold-200 transition duration-300 hover:bg-gold-400/10 xl:hidden"
            >
              <Menu
                size={20}
                className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
                aria-hidden="true"
              />
              <X
                size={20}
                className={`absolute transition-all duration-300 ${menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl transition-[opacity,visibility] duration-500 ease-out xl:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul
          className={`mx-auto flex max-w-md flex-col gap-1 px-6 pb-12 pt-28 transition-all duration-500 ease-out ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className="transition-all duration-500 ease-out"
              style={{ transitionDelay: menuOpen ? `${120 + index * 45}ms` : '0ms' }}
            >
              <a
                href={item.href}
                onClick={closeMenu}
                className={`block rounded-xl px-4 py-3.5 font-display text-2xl transition duration-300 hover:bg-gold-400/10 hover:text-gold-200 ${
                  activeId === item.href.slice(1) ? 'text-gold-200' : 'text-ivory'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-6 sm:hidden">
            <a href="#contact" onClick={closeMenu} className="btn-gold w-full">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
