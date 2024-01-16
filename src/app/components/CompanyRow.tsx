import React from 'react';
import StatusLabels, { Status } from './StatusLabels';
import Image from 'next/image';
import clsx from 'clsx';

type CompanyRowProps = {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: string;
  country: string;
  joinedData: string;
};

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'NotActive',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

const CompanyRow = ({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedData,
}: CompanyRowProps) => {
  return (
    <tr>
      <td className="h-14 text-center text-gray-900 bg-white"></td>
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {category}
      </td>
      <td>
        <a href={`/companies/${id}`}>company</a>
      </td>
      <td>
        <StatusLabels status={status}>{labelByStatus[status]}</StatusLabels>
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${promotion ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              promotion ? 'text-green-700' : 'text-red-700',
            )}
          >
            {promotion ? 'yes' : 'no'}
          </span>
        </div>
      </td>
      <td>{country}</td>
      <td className="rounded-r">
        {new Date(joinedData).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
};

export default CompanyRow;
