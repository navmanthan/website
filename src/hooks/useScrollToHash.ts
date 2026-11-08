import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_WAIT_MS = 2000;

/** Scrolls to the URL hash target, waiting for it to mount when the page is still loading. */
export function useScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const startedAt = performance.now();
    let frame = 0;

    const attempt = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
      } else if (performance.now() - startedAt < MAX_WAIT_MS) {
        frame = requestAnimationFrame(attempt);
      }
    };

    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [hash, key]);
}
