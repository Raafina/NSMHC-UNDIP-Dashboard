import PageHead from '@/components/commons/PageHead';
import { ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
  title?: string;
}

const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center overflow-hidden  gap-10 py-10 lg:py-0 bg-gradient-to-r from-[#fdfdfb] to-[#f8e6d0]">
      <PageHead title={title} />
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
