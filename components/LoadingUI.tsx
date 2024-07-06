import Image from 'next/image';
import { useState, useEffect } from 'react';

const LoadingUI = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((currentOpacity) => (currentOpacity === 1 ? 0 : currentOpacity + 0.1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        className={`animate-pulse h-24 w-24 opacity-${opacity}`}
        src="/images/logo.png"
        alt="App Logo"
        width={500}
        height={500}
      />
    </div>
  );
};

export default LoadingUI;