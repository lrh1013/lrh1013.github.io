import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (!isHome) {
      window.location.href = `/${targetId}`;
      return;
    }

    gsap.to(window, {
      duration: 0.8,
      scrollTo: {
        y: targetId,
        //offsetY: 80,
      },
      ease: 'power2.out',
    });
  };

  return (
    <header
      id="header"
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 transform
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-black/50 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}
      `}
    >
      <div className="flex justify-between items-center max-w-9/10 mx-auto">
        <h1 className="font-playfair font-bold text-2xl">
          <Link to="/">
            RANY<span>.</span>
          </Link>
        </h1>

        <nav className="hidden md:block">
          {isHome ? (
            <ul className="flex space-x-8 text-sm font-medium tracking-wide">
              {['HOME', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((item) => {
                const target = `#${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <a
                      href={target}
                      onClick={(e) => handleNavClick(e, target)}
                      className="hover:text-brand-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium hover:text-brand-400 transition-colors"
            >
              <ArrowLeft size={18} />
              BACK TO HOME
            </Link>
          )}
        </nav>

        <div className="md:hidden relative z-50">
          {isHome ? (
            <button
              type="button"
              className="text-white p-1 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          ) : (
            <Link to="/" className="text-white p-1 block" aria-label="홈으로 돌아가기">
              <ArrowLeft size={24} aria-hidden="true" />
            </Link>
          )}
        </div>

        {/* Mobile Full Screen Menu */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
          className={`
            fixed left-0 top-0 w-full h-screen inset-0 bg-black/95 z-40 flex flex-col justify-center items-center
            transition-all duration-300 md:hidden
            ${isMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}
          `}
        >
          {isHome && (
            <ul className="flex flex-col items-center space-y-8 text-2xl font-bold tracking-widest text-white">
              {['HOME', 'PROJECT', 'EXPERIENCE', 'CONTACT'].map((item) => {
                const target = `#${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <a
                      href={target}
                      onClick={(e) => {
                        handleNavClick(e, target);
                        setIsMenuOpen(false);
                      }}
                      className="hover:text-brand-400 transition-colors block py-2"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
