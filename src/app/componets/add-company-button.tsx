'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './button';
import { useRouter } from 'next/navigation';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
