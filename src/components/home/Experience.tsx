import { useRef, useLayoutEffect } from 'react';
import { EXPERIENCES } from '@/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top",
        ease: "none"
      });

      const items = gsap.utils.toArray('.timeline-item') as HTMLElement[];
      items.forEach((item: HTMLElement) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-12 md:py-24">
      <div className="max-w-9/10 mx-auto">
        <h2 className="flex flex-col items-center mb-24 text-4xl md:text-7xl">
          <span className="block mb-4 text-sm md:text-base tracking-[0.2em] uppercase text-brand-400 animate-pulse">
            MY JOURNEY
          </span>
          <strong className="tracking-[0.05em]">EXPERIENCE</strong>
        </h2>
        <div className="timeline-container relative">
          <div className="timeline-line absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 origin-top"></div>
          <div className="space-y-12">
            {EXPERIENCES.map((job, index) => (
              <div key={job.id} className="timeline-item relative">
                <div className="absolute left-5 md:left-1/2 w-3 h-3 -translate-x-1.5 mt-2 rounded-full bg-brand-500 shadow-[0_0_15px_rgba(139,92,246,0.6)] z-10"></div>
                <div className={`md:flex items-start justify-between ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block md:w-[50%]"></div>
                  <div className={`pl-12 md:w-[50%] ${index % 2 === 1 ? 'md:pl-0 md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <span className="inline-block mb-3 px-2 py-1 rounded text-xs text-brand-300 bg-brand-900/20 tracking-[0.05em]">
                      {job.period}
                    </span>
                    <h3 className="mb-1 text-2xl md:text-5xl font-bold text-white">
                      {job.company}
                    </h3>
                    <span className="block text-sm md:text-lg text-brand-400 mb-4">
                      {job.role}
                    </span>
                    {/*
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                      {job.description}
                    </p>
                    */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
