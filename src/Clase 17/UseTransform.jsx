import { useState } from 'react';

const useTransform = (initialTransform) => {
  const [transform, setTransform] = useState(initialTransform);

  const applyTransition = () => {
    setTransform('rotate(360deg)');
  };

  return { transform, applyTransition };
};

export default useTransform