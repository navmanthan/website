import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Section';
import { Seo } from '@/components/common/Seo';

export function RouteError() {
  return (
    <>
      <Seo title="Something Went Wrong" noindex />
      <section role="alert" className="tone-dark hero-backdrop flex min-h-[100svh] items-center">
        <Container className="py-32 text-center">
          <h1 className="font-display text-3xl font-semibold text-fg sm:text-4xl">This page failed to load</h1>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-fg-muted">
            This can happen after a site update or a network interruption. Reloading usually fixes it.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={() => window.location.reload()}>
              Reload Page
            </Button>
            <Button to="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
