'use client';

import React from 'react';
import Modal, { ModalProps } from './Modal';
import CompanyForm, { CompanyFormProps } from './CompanyForm';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

const CompanyFormModal = ({ onSubmit, ...rest }: CompanyFormModalProps) => {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
