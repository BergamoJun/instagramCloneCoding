import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 ERROR!</h1>
      <img src='assets/404.jpg' alt="error"/>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/" className="back-home">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;