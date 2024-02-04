import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import { CompanyStatus } from '@/lib/api';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={CompanyStatus.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
