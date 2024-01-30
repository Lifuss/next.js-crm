import CompanyRow from '@/app/components/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable';
import { Status } from '@/app/components/StatusLabels';
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
