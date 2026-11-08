import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." noindex />
      <section className="tone-dark hero-backdrop grid-lines relative flex min-h-[100svh] items-center overflow-hidden">
        <Container className="relative py-32 text-center">
          <p className="text-gradient font-display text-8xl font-semibold tracking-[-0.04em] sm:text-9xl">404</p>
          <h1 className="mt-6 font-display text-3xl font-semibold text-fg sm:text-4xl">This page could not be found</h1>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-fg-muted">
            The link may be out of date, or the page may have moved.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/" arrow>
              Back to Home
            </Button>
            <Button to="/services" variant="secondary">
              Explore Our Solutions
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
