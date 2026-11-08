import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { site } from '@/data/site';

interface SeoProps {
  title?: string;
  description?: string;
  noindex?: boolean;
  jsonLd?: object;
}

export function Seo({ title, description = site.description, noindex, jsonLd }: SeoProps) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  const canonical = `${site.url}${pathname === '/' ? '/' : pathname}`;
  const image = `${site.url}${site.ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
