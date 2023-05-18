import React, {useRef} from 'react';
import { Button, Space, Divider } from 'antd';
/**
 * useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
 * 这个ref对象只有一个current属性，你把一个东西保存在内，它的地址一直不会变。
 * 使用场景：
 *  1. 一般用于DOM操作；
 *  2. 也可以传入js变量，但是不会出发rerender（重新渲染）；
 * */
// 1. dom操作场景
// const UseRefCom:React.FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const selectInput = function() {
//     const inputElm = inputRef.current; // DOM 节点 后续就完全开始使用DOM API使用
//     inputElm?.select(); // 等价于 if (inputElm) inputElm.select()
//   };
//   return (
//     <>
//       <Divider orientation="left">useRef的基本使用</Divider>
//       <input ref={inputRef} defaultValue="helo word"/>
//       <Button onClick={selectInput}>选中input</Button>
//     </>
//   )
// }

// 2. 不会触发rerender
const UseRefCom:React.FC = () => {
  const nameRef = useRef('ethan');
  const changeRef = function() {
      nameRef.current = 'ethanssss';
      console.log(nameRef.current);
  };
  return (
    <>
      <Divider orientation="left">useRef的基本使用</Divider>
      {/* nameRef.current 实际已经修改了，但是不会触发页面更新 */}
      {/* 这里是不是可以直接使用js变量，用useRef貌似也没有多大意义 */}
      <p>{nameRef.current}</p>
      <Button onClick={changeRef}>修改Ref</Button>
    </>
  )
}

export default UseRefCom;