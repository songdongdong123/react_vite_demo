import { Divider } from 'antd';
import {
  UseStateCom,
  UseReducerCom,
  UseEffectCom,
  UseContextCom,
  UseCallbackCom,
  UseRefCom,
  ClosureTrap,
} from '../../examples/hooks';

import CssModule from '../../examples/cssModule';
import useTitle from '../../examples/hooks/customHooks/useTitle';
import React from 'react';
import useMouse from '../../examples/hooks/customHooks/useMouse';
import useUserInfo from '../../examples/hooks/customHooks/useUserInfo';
const Example: React.FC = () => {
  useTitle('演示案例demo');
  const { clientX, clientY } = useMouse();
  const { loading, userInfo } = useUserInfo();
  return (
    <div style={{ paddingBottom: 300 }}>
      <h1>相关案例demo展示</h1>
      <UseStateCom />
      <UseReducerCom />
      <UseEffectCom />
      <UseContextCom />
      <UseCallbackCom />
      <UseRefCom />
      <ClosureTrap />
      <CssModule />
      <div>
        <Divider orientation="center">自定义hooks的使用</Divider>
        <p>
          当前鼠标位置坐标：{clientX}, {clientY}
        </p>
        <p>当前用户信息：{loading ? 'loading' : userInfo}</p>
      </div>
    </div>
  );
};

export default Example;
