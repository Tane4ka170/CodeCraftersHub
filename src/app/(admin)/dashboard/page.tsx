import MagicButton from '@/app/componets/magic-button';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}
