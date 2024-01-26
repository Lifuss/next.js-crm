'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';

type magicButtonProps = {};

const MagicButton = (props: magicButtonProps) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 2) {
      throw new Error('unexpected error');
    }
  }, [count]);
  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic button
    </Button>
  );
};

export default MagicButton;
