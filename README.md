# Navmanthan Website

Corporate website for [navmanthan.in](https://navmanthan.in), built with React, Vite, TypeScript, Tailwind CSS, React Router, Motion and Lucide.

## Run

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the production site to `dist/`. `npm run preview` serves that build.

## Before launch

| What | Where |
| --- | --- |
| Real business email and phone, then set `isPlaceholder: false` | `src/data/site.ts` |
| LinkedIn and GitHub URLs (the footer shows "Soon" until set) | `src/data/site.ts` |
| Enquiry backend | see below |
| Host-level SPA fallback, so routes such as `/about` serve `index.html` | your hosting config |

## Backend integration

`src/services/api.ts` is the shared HTTP client. `src/services/enquiryService.ts` sends the contact form.

Set `VITE_API_BASE_URL` (see `.env.example`) and expose this endpoint from FastAPI, with CORS allowing the site's origin:

```
POST /api/v1/enquiries
{ "name", "company", "email", "phone", "industry", "service", "description" }
```

Any 2xx JSON response shows the success state. `industry` and `service` are slugs from the data files, and `service` may also be `not-sure`.

Until the variable is set, the form validates input and then tells the visitor that nothing was sent.

## Adding content

Content lives in `src/data`, and pages render from it.

- **New service:** append to `services.ts`. It appears in the mega menu, mobile menu, overview page and enquiry form, and gets a `/services/:slug` page. Add the URL to `public/sitemap.xml`.
- **New industry:** append to `industries.ts`. It appears on the Industries page, its section navigation, the home preview and the enquiry form.
- **New technology:** append to `technologies.ts`.
- **New AI solution:** append to `aiSolutions.ts`.

## Structure

```
src/
  components/
    cards/       Reusable cards
    common/      Button, Section, Seo, Reveal, Logo
    forms/       Enquiry form and field wrapper
    layout/      Footer, skip link
    navigation/  Navbar, mega menu, mobile menu
    sections/    Page sections, including the hero canvas
  data/          Site content
  hooks/         Scroll, active section and modal behavior
  layouts/       Root layout and page transitions
  pages/         One folder per route group
  routes/        Router configuration
  services/      API client and enquiry submission
  types/         Shared types
  utils/         Class names and form validation
```

Colors are defined in `src/index.css`. Wrapping content in `.tone-dark`, `.tone-light` or `.tone-mist` switches the `fg`, `line`, `surface` and `accent` colors, so components adapt to the section they sit in.

## SEO note

Page titles and metadata are set client-side with React Helmet Async, and `index.html` holds site-wide defaults for crawlers that do not run JavaScript. If social previews per page or stronger indexing become a priority, add prerendering at build time.
