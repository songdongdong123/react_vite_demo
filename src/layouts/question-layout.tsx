import React from 'react';
import { Outlet } from 'react-router-dom';
const QuestionLayout: React.FC = () => {
  return (
    <>
      <div> QuestionLayout Header</div>
      {/* 子路由展示 */}
      <Outlet />
      <div> QuestionLayout Footer</div>
    </>
  );
};

export default QuestionLayout;
