import React from 'react';
import Link from 'next/link';


const New = () => {
  return (
    <div>
      <h1>New</h1>


      <div>
        <Link href="/user">Users</Link>
      </div>
    </div>
  );
};

export default New;