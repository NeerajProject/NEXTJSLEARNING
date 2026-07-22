import { ProductCard } from '@/app/components/ProductCard'
import Link from 'next/dist/client/link'
import React from 'react'

const New = () => {
  return (
    <div>New
      <ProductCard />
      <div>
        <Link href="/user">Users</Link>
      </div>
    </div>

  )
}

export default New