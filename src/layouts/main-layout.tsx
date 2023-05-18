import { Outlet } from "react-router-dom";
const MainLayout:React.FC = () => {
  return (
    <>
      <div> MainLayout Header</div>
      {/* 子路由展示 */}
      <Outlet />
      <div> MainLayout Footer</div>
    </>
  )
}

export default MainLayout;