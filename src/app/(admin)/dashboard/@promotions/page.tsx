import React from 'react';
import DashboardCard from '@/app/componets/dashboard-card';
import SummaryTable from '@/app/componets/summary-table';
import SummaryTableHeader from '@/app/componets/summary-table-header';
import SummaryTableCell from '@/app/componets/summary-table-cell';
import { getPromotions } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
