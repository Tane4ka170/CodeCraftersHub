'use client';
import React from 'react';

export interface GlobalErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: GlobalErrorComponentProps) {
  return (
    <html>
      {' '}
      <body>
        <div>
          <p> Something globally went wrong.</p>
        </div>
      </body>
    </html>
  );
}
