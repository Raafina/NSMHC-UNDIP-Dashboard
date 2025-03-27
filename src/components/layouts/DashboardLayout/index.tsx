import PageHead from '@/components/commons/PageHead';
import { ReactNode, useState } from 'react';
import DashboardLayoutSidebar from './DashboardLayoutSidebar';
import { SIDEBAR_ADMIN } from './DashboardLayout.constans';
import { Navbar, NavbarMenuToggle } from '@heroui/react';

interface PropTypes {
  children: ReactNode;
  description?: string;
  title?: string;
  type?: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, description, title } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex bg-white ">
        <DashboardLayoutSidebar sidebarItems={SIDEBAR_ADMIN} isOpen={open} />
        <div className="h-screen w-full overflow-y-auto ">
          <Navbar
            className="flex justify-between bg-transparent  shadow-md px-3 py-5"
            isBlurred={false}
            classNames={{ wrapper: 'p-0' }}
            position="static">
            <div className="flex flex-col">
              <h1 className="pt-2 text-2xl md:text-3xl text-brown-extreme-dark font-medium">
                {title}
              </h1>
              <p className="pt-b text-base text-brown-extreme-dark">
                {description}
              </p>
              <p className="pb-2 text-small  text-brown-dark">Beranda</p>
            </div>
            <NavbarMenuToggle
              aria-label={open ? 'Close Menu' : 'Open Menu'}
              onClick={() => setOpen(!open)}
              className="lg:hidden text-brown-extreme-dark px-8 "
            />
          </Navbar>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
