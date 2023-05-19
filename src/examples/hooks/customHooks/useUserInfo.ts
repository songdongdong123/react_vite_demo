import { useState, useEffect } from 'react';
// 返回一个promise 对象，promise中返回的是结果是一个字符串类型结果
const getInfo = function (): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ethan');
    }, 3000);
  });
};
const useUserInfo = function () {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    getInfo().then(res => {
      setLoading(false);
      setUserInfo(res);
    });
  }, [loading, userInfo]);
  return { loading, userInfo };
};

export default useUserInfo;
