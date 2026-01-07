import { Mail } from 'lucide-react';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

function Footer() {
  return (
    <footer id="contact" className="relative z-2 bg-[#020202] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-9/10 lg:max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 tracking-tight">
            Let's work <br className="hidden md:block" />{' '}
            <span className="text-brand-500">together!</span>
          </h2>

          <address className="flex flex-col justify-center space-y-8 not-italic">
            <a
              href="mailto:dolefulmoon@naver.com"
              aria-label="dolefulmoon@naver.com로 이메일 보내기"
              className="flex items-center gap-4 text-xl lg:text-3xl text-white hover:text-brand-400 transition-colors group font-serif"
            >
              <div
                className="p-4 rounded-full bg-white/5 group-hover:bg-brand-500/20 transition-colors"
                aria-hidden="true"
              >
                <Mail size={32} />
              </div>
              dolefulmoon@naver.com
            </a>
            <p className="text-gray-400 text-sm md:text-lg max-w-md">
              Currently available for freelance projects and open to full-time opportunities.
            </p>
          </address>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 text-center">
        <div className="text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Lim Ranhee. All rights reserved.</p>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}

export default Footer;
