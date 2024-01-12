import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

type Props = {
  children: React.ReactNode;
  status: Status;
};

const StatusLabels = ({ children, status }: Props) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center px-3.5 py-1 rounded-3xl text-sm font-medium',
        status === Status.Active && 'bg-green-100 text-green-700',
        status === Status.NotActive && 'bg-red-100 text-red-700',
        status === Status.Pending && 'bg-orange-100 text-orange-700',
        status === Status.Suspended && 'bg-blue-100 text-blue-700',
      )}
    >
      <div className="w-1 h-1 rounded-full mr-2 bg-current"></div>
      {children}
    </div>
  );
};

export default StatusLabels;
