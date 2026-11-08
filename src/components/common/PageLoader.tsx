import { LoaderCircle } from 'lucide-react';

export function PageLoader() {
  return (
    <div role="status" className="tone-dark bg-canvas flex min-h-screen items-center justify-center text-fg-muted">
      <LoaderCircle aria-hidden className="size-6 animate-spin-slow" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
