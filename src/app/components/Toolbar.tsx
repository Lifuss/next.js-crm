import React from 'react';

type ToolbarProps = {
  children: React.ReactNode;
  action?: React.ReactNode;
};

const Toolbar = ({ children, action }: ToolbarProps) => {
  return (
    <div className="flex items-center gap-7 py-8 px-10">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
};

export default Toolbar;