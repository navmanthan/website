import { ChevronDown, X } from 'lucide-react';
import { m } from 'motion/react';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Logo } from '@/components/common/Logo';
import { primaryNav } from '@/data/navigation';
import { servicePath, services } from '@/data/services';
import { useModalBehavior } from '@/hooks/useModalBehavior';
import { cn } from '@/utils/cn';

const linkClass = 'font-display text-xl font-semibold text-fg';

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  useModalBehavior(panelRef, true, onClose);

  // Portalled because the header's backdrop-filter would otherwise contain a fixed child.
  return createPortal(
    <m.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="tone-dark hero-backdrop fixed inset-0 z-[55] flex flex-col overflow-y-auto"
    >
      <div className="flex h-[72px] shrink-0 items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={onClose} aria-label="Navmanthan home">
          <Logo />
        </Link>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-fg"
        >
          <X aria-hidden className="size-6" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 px-5 pt-4 sm:px-8">
        <ul className="divide-y divide-line border-y border-line">
          {primaryNav.map((item) => (
            <li key={item.to}>
              {item.to === '/services' ? (
                <div>
                  <div className="flex items-center justify-between">
                    <NavLink to={item.to} onClick={onClose} className={cn(linkClass, 'flex-1 py-4')}>
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      aria-label="Show individual services"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((open) => !open)}
                      className="-mr-2 inline-flex size-11 items-center justify-center text-fg-muted"
                    >
                      <ChevronDown
                        aria-hidden
                        className={cn('size-5 transition-transform duration-200', servicesOpen && 'rotate-180')}
                      />
                    </button>
                  </div>
                  {servicesOpen && (
                    <ul className="space-y-1 pb-4">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={servicePath(service.slug)}
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-lg py-2 text-[0.9375rem] text-fg-muted"
                          >
                            <service.icon aria-hidden className="size-[18px] text-accent" strokeWidth={1.75} />
                            {service.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink to={item.to} end={item.to === '/'} onClick={onClose} className={cn(linkClass, 'block py-4')}>
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-5 sm:p-8">
        <Button to="/contact#enquiry" onClick={onClose} arrow className="w-full">
          Start a Project
        </Button>
      </div>
    </m.div>,
    document.body,
  );
}
