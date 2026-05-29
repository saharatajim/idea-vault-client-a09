import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MynavLink = ({href,children}) => {
    const path=usePathname()
   const isActive=path==href
 

    return (
        <div>
            <Link className={`${isActive ? 'text-cyan-400': ' text-blue-300 '} hover:border-b hover:cursor-pointer` }href={href}>{children}</Link>
            
        </div>
    );
};

export default MynavLink;