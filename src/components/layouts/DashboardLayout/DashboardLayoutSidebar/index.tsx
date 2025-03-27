import { cn } from '@/utils/cn';
import { Button, Listbox, ListboxItem } from '@heroui/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { JSX } from 'react';
import { CiLogout } from 'react-icons/ci';

interface SidebarItem {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface PropTypes {
  sidebarItems: SidebarItem[];
  isOpen: boolean;
}

const DashboardLayoutSidebar = (props: PropTypes) => {
  const { sidebarItems, isOpen } = props;
  const router = useRouter();
  return (
    <div
      className={cn(
        'fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r-1 border-default-200 bg-brown-extreme-dark transition-all lg:relative lg:translate-x-0',
        { 'translate-x-0': isOpen }
      )}>
      <div>
        <div className="flex justify-center bg-brown-normal rounded-bl-3xl px-4 py-4 ">
          <Image
            src="/images/logo/NSMHC_Logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-16"
            onClick={() => router.push('/')}
          />
          <div className="ms-4 flex flex-col justify-center">
            <h1 className="text-brown-extreme-dark text-4xl font-medium">
              NSMHC
            </h1>
            <p className="text-xs text-brown-extreme-dark">
              Nursing Students Mother Heart Connection
            </p>
          </div>
        </div>
        <Listbox
          items={sidebarItems}
          variant="solid"
          aria-label="Dashboard Menu"
          className="px-4 pt-4">
          {(item) => (
            <ListboxItem
              key={item.key}
              className={cn(
                ' rounded my-1 px-6 h-12 flex justify-start text-base text-brown-light',
                'data-[hover=true]:bg-brown-light data-[hover=true]:text-brown-extreme-dark',
                {
                  'bg-brown-normal text-brown-extreme-dark':
                    router.pathname.startsWith(item.href),
                }
              )}
              startContent={item.icon}
              textValue={item.label}
              aria-labelledby={item.label}
              aria-describedby={item.label}
              as={Link}
              href={item.href}>
              <p className="text-base">{item.label}</p>
            </ListboxItem>
          )}
        </Listbox>
      </div>
      <div className="flex items-center px-4">
        <Button
          fullWidth
          variant="light"
          className=" flex justify-start text-base rounded-lg px-6 h-12 text-red-600 data-[hover=true]:bg-red-100 data-[hover=true]:text-red-700"
          size="lg"
          onPress={() => signOut()}>
          <CiLogout />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;
