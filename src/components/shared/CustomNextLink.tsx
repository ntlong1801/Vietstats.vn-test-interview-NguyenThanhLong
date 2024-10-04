import Link from 'next/link';
import React from 'react';

type CustomLinkProps = {
  children: React.ReactNode;
  href?: string | null;
  className?: string;
};

const CustomNextLink = ({ children, href, className }: CustomLinkProps) => {
  if (href)
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );

  return <div className={className}>{children}</div>;
};

export default CustomNextLink;
