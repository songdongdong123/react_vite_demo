import { useState, useEffect } from 'react';
const useMouse = function () {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const handleMouseMove = function (event: MouseEvent) {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [clientX, clientY]);
  return {
    clientX,
    clientY,
  };
};
export default useMouse;
