'use client'
import { usePathname} from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, children, className, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={className(isActive)}  {...props} >
     {children}
    </Link>
  );
};

export default NavLink;

