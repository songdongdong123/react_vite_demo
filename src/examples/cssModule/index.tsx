import React from 'react';
import s from './index.module.scss';
import { Divider } from 'antd';
interface A {
  foo?: 'a' | 'b';
  bar: number;
}
interface B {
  foo?: string;
  bar: string;
}

const CssModule: React.FC = () => {
  return (
    <>
      <Divider orientation="left">CssModule的基本使用</Divider>
      <p className={s['css-module']}>ssssss</p>
      <p className={s.list}>sssss</p>
    </>
  );
};

export default CssModule;
