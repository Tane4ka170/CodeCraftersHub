import CompanyRow from '@/app/componets/company-row';
import CompanyTable from '@/app/componets/company-table';
import { Status } from '@/app/componets/status-label';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
