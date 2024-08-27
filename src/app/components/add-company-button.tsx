'use client'; // Позначення клієнтського компонента

import React from 'react';
// import dynamic from 'next/dynamic';
import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

// Дінамічний імпорт (від Next.js) компонентів які не потрібні при першому завантаженні App
// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
