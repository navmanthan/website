import { ChevronDown, Menu } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Logo } from '@/components/common/Logo';
import { Container } from '@/components/common/Section';
import { MegaMenu } from '@/components/navigation/MegaMenu';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { primaryNav } from '@/data/navigation';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/utils/cn';

const CLOSE_DELAY_MS = 140;

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('rounded-md px-3 py-2 text-sm font-medium transition-colors', isActive ? 'text-fg' : 'text-fg-muted hover:text-fg');

export function Navbar() {
  const scrolled = useScrolled();
  const { pathname } = useLocation();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number>();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const closeMega = useCallback(() => setMegaOpen(false), []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const openWithHover = () => {
    window.clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const closeWithDelay = () => {
    closeTimer.current = window.setTimeout(() => setMegaOpen(false), CLOSE_DELAY_MS);
  };

  const onMegaKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && megaOpen) {
      setMegaOpen(false);
      toggleRef.current?.focus();
    }
  };

  return (
    <header
      className={cn(
        'tone-dark fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || megaOpen ? 'border-line bg-ink-900/95 backdrop-blur-xl' : 'border-transparent',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Navmanthan home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) =>
            item.to === '/services' ? (
              <div
                key={item.to}
                className="flex items-center"
                onMouseEnter={openWithHover}
                onMouseLeave={closeWithDelay}
                onKeyDown={onMegaKeyDown}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setMegaOpen(false);
                }}
              >
                <NavLink to={item.to} className={(state) => cn(navLinkClass(state), 'pr-1')}>
                  {item.label}
                </NavLink>
                <button
                  ref={toggleRef}
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="services-mega-menu"
                  aria-label="Toggle services menu"
                  onClick={() => setMegaOpen((open) => !open)}
                  className="rounded-md py-2 pr-2 pl-0.5 text-fg-muted transition-colors hover:text-fg"
                >
                  <ChevronDown
                    aria-hidden
                    className={cn('size-3.5 transition-transform duration-200', megaOpen && 'rotate-180')}
                  />
                </button>
                <AnimatePresence>{megaOpen && <MegaMenu onNavigate={closeMega} />}</AnimatePresence>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button to="/contact#enquiry" size="md" arrow>
              Start a Project
            </Button>
          </div>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-fg lg:hidden"
          >
            <Menu aria-hidden className="size-6" />
          </button>
        </div>
      </Container>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={closeMobile} />}</AnimatePresence>
    </header>
  );
}
