'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, children, activeClassName, inactiveClassName, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const computedClassName = isActive ? activeClassName : inactiveClassName;

  return (
    <Link href={href} {...props} className={computedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
