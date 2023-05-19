import { Card, Space, Button } from 'antd';
import React, { useContext } from 'react';
import { UserContext, TestStoreContext } from './context';
const Test2: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const { testStore } = useContext(TestStoreContext);
  return (
    <>
      <Card style={{ width: 300 }}>
        <p>{user ? user.name : 'empty'}</p>
        <p>
          全局共享状态展示：
          {testStore ? testStore.layout : 'empty'}
        </p>
        <Space wrap>
          <Button type="primary" onClick={() => setUser({ name: 'ddd', email: '123' })}>
            登陆
          </Button>
          <Button type="primary" onClick={() => setUser(null)}>
            退出
          </Button>
        </Space>
      </Card>
    </>
  );
};

export default Test2;
