import { useState, useMemo } from 'react';
import { PROJECTS } from '@/constants';
import { Link } from 'react-router-dom';

function Project() {
  const [sortOrder, setSortOrder] = useState<'default' | 'latest'>('default');

  const sortedProjects = useMemo(() => {
    if (sortOrder === 'default') return PROJECTS;
    return [...PROJECTS].sort((a, b) => Number(b.year) - Number(a.year));
  }, [sortOrder]);

  return (
    <section id="project" className="py-12 md:py-24 text-center">
      <div className="max-w-9/10 mx-auto">
        <h2 className="flex flex-col items-center mb-12 text-4xl md:text-7xl">
          <span
            className="
              block mb-4
              text-sm md:text-base tracking-[0.2em] uppercase text-brand-400 
              animate-pulse
            "
          >
            RECENT TASK
          </span>
          <strong className="tracking-[0.05em]">PROJECT</strong>
        </h2>
        <div className="flex justify-center gap-8 mb-16">
          <button
            onClick={() => setSortOrder('default')}
            className={`
              cursor-pointer text-sm md:text-base tracking-widest uppercase transition-colors duration-300
              ${sortOrder === 'default' ? 'text-white font-bold border-b border-brand-400 pb-1' : 'text-gray-500 hover:text-gray-300'}
            `}
          >
            Default
          </button>
          <button
            onClick={() => setSortOrder('latest')}
            className={`
              cursor-pointer text-sm md:text-base tracking-widest uppercase transition-colors duration-300
              ${sortOrder === 'latest' ? 'text-white font-bold border-b border-brand-400 pb-1' : 'text-gray-500 hover:text-gray-300'}
            `}
          >
            Latest
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sortedProjects.map((project) => (
            <Link key={project.id} to={`/project/${project.id}`} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 border border-white/5">
                <img
                  src={project.imageThumb}
                  alt=""
                  className="
                    w-full h-full 
                    object-cover transition-transform duration-700 filter group-hover:scale-110
                  "
                />
                <div
                  className="
                    absolute inset-0 
                    flex flex-col items-center justify-center p-6 text-center bg-black/80 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  "
                >
                  {project.category && (
                    <span
                      className="
                        mb-3 
                        text-brand-400 text-xs font-bold uppercase tracking-widest 
                        translate-y-4 group-hover:translate-y-0 
                        transition-transform duration-300 delay-75
                      "
                    >
                      {project.category}
                    </span>
                  )}

                  <strong
                    className="
                      block mb-2 
                      text-3xl font-bold text-white 
                      translate-y-4 group-hover:translate-y-0 
                      transition-transform duration-300 delay-100
                    "
                  >
                    {project.title}
                  </strong>

                  {project.year && (
                    <span
                      className="
                        text-gray-400 text-sm 
                        translate-y-4 group-hover:translate-y-0 
                        transition-transform duration-300 delay-150
                      "
                    >
                      {project.year}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
