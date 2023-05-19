import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Button, Space, Divider } from 'antd';
/**
 * 1. JS内部函数创建是非常快的，这点性能问题不是个问题；
 * 2. 其实使用useCallback会造成额外的性能，因为增加了额外的deps变化判断。
 * 3. useCallback其实并不是解决内部函数重新创建的问题。其实不管是否使用useCallback，都无法避免重新创建内部函数：
 * 4. useCallback需要搭配useMemo或者shouldComponentUpdate才可以起到优化子组件重复渲染问题；
 */
const UseCallbackCom: React.FC = () => {
  const [count, setCount] = useState(0);
  const logCount = useCallback(() => {
    console.log(`Count is ${count}`);
  }, [count]);
  useEffect(() => {
    logCount();
  }, [logCount]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default UseCallbackCom;
