import React from 'react';
import Header from '../../componets/header';
import Toolbar from '../../componets/toolbar';
import SearchInput from '../../componets/search-input';
import AddCompanyButton from '../../componets/add-company-button';
import CompanyTable from '../../componets/company-table';
import CompanyRow from '../../componets/company-row';
import { Status } from '../../componets/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Yeah'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.2023'}
        />
      </CompanyTable>
    </>
  );
}
