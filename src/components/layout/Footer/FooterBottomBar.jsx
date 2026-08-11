import { Link } from 'react-router-dom';

export default function FooterBottomBar() {
  return (
    <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
      {/* COPYRIGHT & TAGLINE */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
        <span>&copy; 2026 CraveX. All rights reserved.</span>
        <span className="hidden sm:inline text-gray-600">•</span>
        <span>Made with ❤️ for food lovers.</span>
      </div>

      {/* LEGAL LINKS */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <Link to="/privacy" className="hover:text-orange-400 transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-orange-400 transition-colors">
          Terms &amp; Conditions
        </Link>
        <Link to="/cookies" className="hover:text-orange-400 transition-colors">
          Cookie Policy
        </Link>
      </div>
    </div>
  );
}
