import React, { useState } from 'react';
import { UserContext, User, TestStoreContext, TestStore } from './context';
import { Divider, Col, Row, Button } from 'antd';
import Test from './test';
import Test2 from './test2';
/**
 * useContext 是 React 提供的一个 Hooks，它可以让您在组件树中传递数据，而无需手动传递 props。
 * 它的基本使用场景是在组件中访问父组件或祖先组件中的数据，以实现数据共享。
 */
const UseContextCom: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // 只共享数据,
  const [testStore, setTestStore] = useState<TestStore | null>(null);
  return (
    <>
      <Divider orientation="left">useContext的基本使用</Divider>
      <Button type="primary" onClick={() => setTestStore({ layout: 'ddd', value: true })}>
        全局登陆
      </Button>
      <Button type="primary" onClick={() => setTestStore(null)}>
        全局登陆
      </Button>
      <UserContext.Provider value={{ user, setUser }}>
        <Row gutter={16}>
          <Col span={8}>
            <Test></Test>
          </Col>
          <Col span={8}>
            <Test2></Test2>
          </Col>
        </Row>
      </UserContext.Provider>
      {/* 父组件只共享状态, 子组件不具备修改状态的能力*/}
      <TestStoreContext.Provider value={{ testStore }}>
        <Row gutter={16}>
          <Col span={8}>
            <Test></Test>
          </Col>
          <Col span={8}>
            <Test2></Test2>
          </Col>
        </Row>
      </TestStoreContext.Provider>
    </>
  );
};
export default UseContextCom;
