'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';
import Modal from '@/app/components/modal';
import { CompanyFormProps } from '@/app/components/company-form';


export interface CompanyFormModalProps extends CompanyFormProps {
    onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({ onSubmit, ...rest }: CompanyFormModalProps) {
  return (
    <Modal {...rest} >
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}