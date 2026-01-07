function Hero() {
  return (
    <section id="home" className="overflow-hidden flex items-center justify-center relative w-full h-screen">
      <div className="relative z-10 max-w-9/10 mx-auto text-center">
        <div className="flex flex-col">
          <span className="block mb-2 text-base tracking-[0.2em] text-brand-400 animate-pulse uppercasemd:text-lg">
            FRONTEND ENGINEER
          </span>
          <strong className="block mb-12 font-playfair font-bold uppercase text-6xl md:text-8xl lg:text-9xl">
            LIM RAN HEE
          </strong>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
