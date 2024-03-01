import { headers } from 'next/headers';
import * as React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export function ServerComponentCopy({ children }: ServerComponentProps) {
  console.log('Sever Component copy');
  console.log(headers());
  return (
    <div>
      <span>Server Component copy</span>
      {children}
    </div>
  );
}
