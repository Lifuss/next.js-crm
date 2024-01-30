'use client';

import Button from '@/app/components/Button';
import React from 'react';

type ErrorComponentProps = {
  error: Error;
  reset: () => void;
};

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>something went wrong - {error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}

export default ErrorComponent;
