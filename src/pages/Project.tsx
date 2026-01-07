import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MasonryGrid from '@/components/common/MasonryGrid';
import { PROJECTS } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-brand-400 hover:text-brand-300 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={project.imageVisual} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          {project.category && (
            <span className="block mb-4 text-brand-400 tracking-[0.2em] text-sm md:text-base uppercase font-bold">
              {project.category}
            </span>
          )}
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-widest mb-4">
            {project.title}
          </h2>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 border-b border-white/5">
        <ul className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-center">
          <li className="flex-1 text-2xl font-semibold">
            <span className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Date
            </span>
            {project.year}
          </li>
          <li className="flex-1 text-2xl font-semibold">
            <span className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
              Role
            </span>
            {project.role}
          </li>
          {project.link && (
            <li className="flex-1 text-2xl font-semibold">
              <span className="block text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
                URL
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-brand-400 transition-colors"
              >
                Visit Website <ExternalLink size={20} className="ml-2" />
              </a>
            </li>
          )}
        </ul>
      </section>

      {/* Description */}
      {project.description && project.description.length > 0 && (
        <section className="py-20 px-6 border-b border-white/5 bg-[#050505]">
          <div className="max-w-[1200px] mx-auto">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 md:mb-12 text-center">OVERVIEW</h3>
              <p className="text-[1rem] md:text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Key Points */}
            {project.keyPoints && project.keyPoints.length > 0 && (
              <div className="mt-12 md:mt-24 p-8 md:p-12 bg-white/5 rounded-3xl border border-white/5">
                <div className="flex flex-col md:flex-row justify-center md:items-start gap-6 md:gap-12 md:gap-24">
                  <div className="text-left shrink-0 whitespace-nowrap">
                    <h4 className="text-2xl md:text-4xl font-bold text-brand-400 leading-tight">
                      KEY POINTS
                    </h4>
                  </div>
                  <div className="w-full">
                    <ul className="space-y-6 md:space-y-8 pt-1">
                      {project.keyPoints.map((point, index) => (
                        <li key={index} className="flex gap-6 items-start group">
                          <span className="text-lg md:text-2xl font-bold text-white/30 group-hover:text-brand-400 transition-colors">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                          <p className="text-[1rem] md:text-xl text-gray-300 leading-relaxed">
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Main Design */}
      {project.imageMain && (
        <section
          className="py-12 md:py-24 px-6"
          style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
        >
          <div className="max-w-[1600px] mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">MAIN DESIGN</h3>
            <div className="main-design-image overflow-hidden will-change-transform rounded-sm">
              <img
                src={project.imageMain}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </section>
      )}

      {/* Sub Design */}
      {project.imageSub && project.imageSub.length > 0 && (
        <section
          className="py-12 md:py-24 px-6"
          style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
        >
          <div className="max-w-[1600px] mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">SUB DESIGN</h3>
            <MasonryGrid itemSelector=".masonry-item" columnWidth=".masonry-sizer" gutter={32}>
              {project.imageSub.map((img, idx) => (
                <div
                  key={idx}
                  className="
                    masonry-item 
                    w-full md:w-[calc(50%-16px)] mb-8 
                    overflow-hidden shadow-lg border border-white/10 rounded-sm bg-[#0a0a0a]
                  "
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </MasonryGrid>
          </div>
        </section>
      )}

      {/* Mob Design */}
      {project.imageMob && project.imageMob.length > 0 && (
        <section
          className="py-12 md:py-24 px-6"
          style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
        >
          <div className="max-w-[1600px] mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center">DESIGN</h3>
            <MasonryGrid
              itemSelector=".masonry-item"
              columnWidth=".masonry-sizer"
              gutter={32}
              sizerItemClassName="w-full md:w-[calc(50%-16px)] xl:w-[calc(25%-24px)]"
            >
              {project.imageMob.map((img, idx) => (
                <div
                  key={idx}
                  className="masonry-item w-full md:w-[calc(50%-16px)] xl:w-[calc(25%-24px)] mb-8 overflow-hidden shadow-lg border border-white/10 rounded-sm bg-[#0a0a0a]"
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </MasonryGrid>
          </div>
        </section>
      )}

      {/* Navigation */}
      <NavigationFooter currentId={project.id} />
    </div>
  );
}

function NavigationFooter({ currentId }: { currentId: number }) {
  const currentIndex = PROJECTS.findIndex((p) => p.id === currentId);
  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (currentIndex + 1) % PROJECTS.length;

  const prevProject = PROJECTS[prevIndex];
  const nextProject = PROJECTS[nextIndex];

  return (
    <section className="relative w-full h-[30vh] md:h-[50vh] flex border-t border-white/10">
      {/* Prev Project */}
      <Link
        to={`/project/${prevProject.id}`}
        className="relative w-1/2 h-full group overflow-hidden block"
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
        <img
          src={prevProject.imageVisual}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
          <span className="text-brand-400 text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
            PREV
          </span>
          <strong className="text-2xl md:text-4xl font-bold text-white group-hover:text-brand-400 transition-colors">
            {prevProject.title}
          </strong>
        </div>
      </Link>

      {/* Next Project */}
      <Link
        to={`/project/${nextProject.id}`}
        className="relative w-1/2 h-full group overflow-hidden block"
      >
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
        <img
          src={nextProject.imageVisual}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center p-6 text-center">
          <span className="text-brand-400 text-sm tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
            NEXT
          </span>
          <strong className="text-2xl md:text-4xl font-bold text-white group-hover:text-brand-400 transition-colors">
            {nextProject.title}
          </strong>
        </div>
      </Link>

      {/* Home */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <Link
          to="/"
          className="flex items-center justify-center w-16 h-16 bg-black border border-white/20 rounded-full text-white hover:bg-brand-600 hover:border-brand-600 transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          aria-label="Back to Home"
        >
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2 h-2 bg-current rounded-sm"></div>
            <div className="w-2 h-2 bg-current rounded-sm"></div>
            <div className="w-2 h-2 bg-current rounded-sm"></div>
            <div className="w-2 h-2 bg-current rounded-sm"></div>
          </div>
        </Link>
      </div>
    </section>
  );
}
