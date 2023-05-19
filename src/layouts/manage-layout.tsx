import React from 'react';
import { Outlet } from 'react-router-dom';
const ManageLayout: React.FC = () => {
  return (
    <>
      <div> ManageLayout Header</div>
      {/* 子路由展示 */}
      <Outlet />
      <div> ManageLayout Footer</div>
    </>
  );
};

export default ManageLayout;
