'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';
import { CompanyFormProps } from '@/app/components/company-form';


export interface CompanyFormModalProps extends CompanyFormProps {
    onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={onClose} />
    </Modal>
  );
}