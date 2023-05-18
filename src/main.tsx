import React from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'
import 'antd/dist/reset.css';
/**
 * RouterProvider是一个React组件，它是React Router v4的上下文提供者。
 * 它的作用是在React应用程序中提供一个共享的React Router上下文，让所有子组件都可以访问到路由信息。
 * 这样，我们可以在组件中直接访问路由信息，比如获取当前路由、路由参数、路径等信息。
 * 使用RouterProvider还可以避免在每个子组件中都需要引入React Router的上下文，简化了组件的编写和维护。
 * 同时，它还提供了一个中央化管理路由状态的能力，可以方便地进行路由的跳转和状态管理。
*/


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
