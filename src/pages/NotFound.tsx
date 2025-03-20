import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page404">
      <h1 className="h2 mt-5">404 - 페이지를 찾을 수 없습니다.</h1>
      <Link to="/" className="btn btn-primary btn-lg mt-5">돌아가기</Link>
    </div>
  );
};

export default NotFound;
