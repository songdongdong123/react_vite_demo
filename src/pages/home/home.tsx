import React from 'react';
type teststring = 'rect' | 'circle' | 'text'
type rowCol = Array<teststring>
interface SkeletonProps {
  rowCol?: Array<teststring>;
}
const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <>
      <p>Skeleton</p>
    </>
  );
};
/**
 * const ROW_COL= ['rect'];
 * 直接这样定义赋值，那么表示ROW_COL数组的类型是一个字符串类型的数组，它可以包含任意字符串类型的值，
 * 不一定是"rect"、"circle"或"text"中的一个。
 * */ 
// 所以需要在定义的明确告诉只能是什么类型，一种解决方式如下：
const ROW_COL:rowCol= ['rect'];
/**
 * 第二种解决方式，直接在定义类型的时候，告诉是一个字符串类型
 * type teststring = 'rect' | 'circle' | 'text' | string
 * type rowCol = Array<teststring>
 * const ROW_COL= ['rect'];
 * interface SkeletonProps {
        rowCol?: Array<teststring>;
   }
 * */ 

const Home: React.FC = () => (
  <div className='home'>
    Home
    <Skeleton rowCol={ROW_COL} />
  </div>
);

export default Home;
