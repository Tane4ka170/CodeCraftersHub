import AddCompanyButton from '@/app/componets/add-company-button';
import SearchInput from '@/app/componets/search-input';
import Toolbar from '@/app/componets/toolbar';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
