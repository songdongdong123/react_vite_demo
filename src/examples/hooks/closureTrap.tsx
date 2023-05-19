// hooks闭包陷阱
import React, { useState, useCallback } from 'react';
import { Button, Space, Divider } from 'antd';
const ClosureTrap: React.FC = () => {
  const [count, setCount] = useState(0);
  const addCount = function () {
    setCount(count + 1);
  };
  const alertCount = function () {
    setTimeout(() => {
      alert(count);
    }, 3000);
  };
  return (
    <>
      <Divider orientation="left">hooks闭包陷阱</Divider>
      <p>{count}</p>
      <Space wrap>
        {/* 快速点击增加count后，随即点击alertCount, 然后在快速点击几次增加count，最后弹出的count数字是第一遍点击count时的数字，而不是当前最新的 */}
        <Button type="primary" onClick={addCount}>
          增加count+
        </Button>
        <Button type="primary" onClick={alertCount}>
          alertCount
        </Button>
      </Space>
    </>
  );
};

export default ClosureTrap;
