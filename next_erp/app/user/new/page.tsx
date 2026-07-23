import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/app/components/ProductCard';

const New = () => {
  return (
    <div>
      <h1>New</h1>

      <ProductCard />

      <div>
        <Link href="/user">Users</Link>
      </div>
    </div>
  );
};

export default New;