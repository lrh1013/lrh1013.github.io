import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>404 페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </>
  );
};

export default App;
