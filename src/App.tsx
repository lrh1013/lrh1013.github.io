import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

const App = () => {
  return (
    <>
      <header id="header">
        <div className="inner">
          헤더영역
        </div>
      </header>
      <main id="main" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 페이지를 찾을 수 없습니다.</div>} />
        </Routes>
      </main>
      <footer id="footer">
        <div className="inner">
          푸터영역
        </div>
      </footer>
    </>
  );
};

export default App;
