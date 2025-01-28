'use client';
import { usePathname } from 'next/navigation';
import Link, {LinkProps} from 'next/link';
import { ReactNode } from 'react';

// Define an interface that can that extends LinkProps and adds our custom props
interface NavLinkProps extends Omit<LinkProps, 'className'>
{
  children: ReactNode;
  className ?: string | ((isActive:boolean) => string) ;
}
const NavLink = ({ href, children, className, ...props }: NavLinkProps) => {
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
