import { useLocation } from 'react-router-dom';
import Hero from '@/components/home/Hero.tsx';
import Project from '@/components/home/Project.tsx';
import Experience from '@/components/home/Experience.tsx';
import LiquidEther from '@/components/common/LiquidEther.tsx';

function Home() {
  const location = useLocation();

  return (
    <>
      <div className="fixed left-0 top-0 w-full h-screen z-1">
        <LiquidEther
          key={location.key}
          colors={['#a78bfa', '#d5ccf5']}
        />
      </div>
      <div className="relative z-2">
        <Hero />
        <Project />
        <Experience />
      </div>
    </>
  );
}

export default Home;
