import React, { useState } from 'react';
import { Button, Space, Divider } from 'antd';
const UseStateCom: React.FC = () => {
  /**
   * useState: 接受一个state作为初始化的值；
   * useState: 返回一个state，和一个用来修改state的函数。该函数接受一个新的state，从而修改旧的state
   * */
  const [count, setCount] = useState(0);
  return (
    <div>
      <Divider orientation="left">useState的基本使用</Divider>
      <Space wrap>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          增加count+
        </Button>
        <Button type="primary" onClick={() => setCount(count - 1)}>
          减少count-
        </Button>
      </Space>
      <p>{count}</p>
    </div>
  );
};

export default UseStateCom;
