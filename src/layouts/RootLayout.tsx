import { AnimatePresence, domAnimation, LazyMotion, m, MotionConfig } from 'motion/react';
import { Suspense } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { PageLoader } from '@/components/common/PageLoader';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { Navbar } from '@/components/navigation/Navbar';
import { useScrollToHash } from '@/hooks/useScrollToHash';

function resetScroll() {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

export function RootLayout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  useScrollToHash();

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <SkipLink />
        <Navbar />
        <AnimatePresence mode="wait" initial={false} onExitComplete={resetScroll}>
          <m.main
            key={pathname}
            id="main"
            tabIndex={-1}
            className="outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.28 } }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
          >
            <Suspense fallback={<PageLoader />}>{outlet}</Suspense>
          </m.main>
        </AnimatePresence>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
