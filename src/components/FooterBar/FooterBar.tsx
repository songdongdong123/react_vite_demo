// import { Link } from 'react-router-dom';
import React, { useState, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// useLocation router中的hook，用来获取当前路由信息
import './FooterBar.less';
const NAV_OPTIONS = [
  {
    text: '首页',
    path: '/',
  },
  {
    text: '影视',
    path: '/movies',
  },
  {
    text: '音乐',
    path: '/music',
  },
  {
    text: '我的',
    path: '/profile',
  },
];
const getPath = (v: { text: string; path: string }) => {
  return v.path;
};
const FooterBar: React.FC = () => {
  // 简单状态使用useState hook即可
  const [routepath, setPath] = useState('/');
  // const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (v: { text: string; path: string }) => {
    setPath(getPath(v));
    navigate(v.path);
  };
  return (
    <div className="footer-bar">
      {/* Link的使用 */}
      {/* {
                NAV_OPTIONS.map(v => {
                    return (
                        <Link key={v.path} to={v.path}>{v.text}</Link>
                    )
                })
            } */}
      {NAV_OPTIONS.map(v => {
        return (
          <p
            className={v.path === routepath ? 'active' : ''}
            key={v.path}
            onClick={() => handleClick(v)}
          >
            {v.text}
          </p>
        );
      })}
    </div>
  );
};

export default FooterBar;
