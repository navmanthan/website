import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Section';
import { Logo } from '@/components/common/Logo';
import { footerColumns } from '@/data/navigation';
import { site } from '@/data/site';
import type { FooterLink } from '@/types';

const linkClass = 'text-sm text-fg-muted transition-colors hover:text-fg';

function FooterItem({ link }: { link: FooterLink }) {
  if (link.to) {
    return (
      <Link to={link.to} className={linkClass}>
        {link.label}
      </Link>
    );
  }

  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {link.label}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 text-sm text-fg-subtle">
      {link.label}
      <span className="rounded border border-line px-1.5 py-px text-[0.6875rem]">Soon</span>
    </span>
  );
}

export function Footer() {
  return (
    <footer className="tone-dark bg-ink-950">
      <Container className="pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_3fr]">
          <div className="max-w-xs">
            <Link to="/" aria-label="Navmanthan home">
              <Logo />
            </Link>
            <p className="mt-5 text-sm font-medium text-fg">{site.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Intelligent software, enterprise applications, automation and AI for businesses in India and international
              markets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-sm font-semibold tracking-normal text-fg">{column.title}</h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterItem link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Navmanthan. All rights reserved.</p>
          <p>
            Website:{' '}
            <a href={site.url} className="text-fg-muted transition-colors hover:text-fg">
              {site.domain}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
