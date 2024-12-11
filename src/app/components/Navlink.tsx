'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, children, className, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const computedClassName =
    typeof className === 'function' ? className(isActive) : className;

  return (
    <Link href={href} className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
