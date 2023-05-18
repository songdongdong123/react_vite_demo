import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import ManageLayout from "./layouts/manage-layout";
import QuestionLayout from './layouts/question-layout';
import Home from './pages/home/home';
import Login from "./pages/login";
import Register from "./pages/register";
import List from "./pages/manage/list";
import Star from "./pages/manage/star";
import Trash from "./pages/manage/trash";
import Edit from "./pages/question/edit";
import Stat from "./pages/question/stat";
import ErrorPage from "./pages/error/error";
import NotFound from "./pages/error/not-fond";
import Example from "./pages/example";
/**
 * createBrowserRouter和createHashRouter都是React Router提供的路由相关函数。
 * 1. createBrowserRouter使用HTML5的history API进行URL管理，可以通过服务器请求相关数据，适用于动态网站；
 * 2. createHashRouter与createBrowserRouter功能类似，也是创建一个history对象，不过是使用hash URL来管理应用程序的状态，不支持向服务器请求相关数据，更适用于静态网站；
 * 3. createMemoryRouter是一个内存路由，用于在非浏览器环境下进行路由管理，如在服务器端渲染页面时使用。它不会改变浏览器的URL地址，仅更新路由状态，并不会向服务器请求页面内容；
*/
const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ]
      }
    ],
    errorElement: <ErrorPage message="Oops"/>
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id', // 动态路由 例如： /question/edit/123
        element: <Edit />
      },
      {
        path: 'stat/:id',
        element: <Stat></Stat>
      },
    ],
    // errorElement灵活性更好，可以根据不同的模块设置不同的404页面
    errorElement: <ErrorPage message="Oops"/>
  },
  {
    path: '/example',
    element: <Example></Example>
  }
  // {
  //   path: '*', // 404的优先级比ErrorPage的优先级要高
  //   element: <NotFound></NotFound>
  // }
])

export default Router;