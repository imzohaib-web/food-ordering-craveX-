import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global Scroll Restoration component.
 * Automatically scrolls window to top (scrollY = 0) whenever route or location parameters change.
 */
export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating to a specific element anchor (e.g. /menu#categories)
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Always scroll window to top (0, 0) immediately on route change
    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
}
