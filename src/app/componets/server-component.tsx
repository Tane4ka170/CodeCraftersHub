import * as React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

export function ServerComponent({ children }: ServerComponentProps) {
  console.log('Sever Component');
  return (
    <div>
      {' '}
      <span>Server Component</span>
      {children}
    </div>
  );
}
