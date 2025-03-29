import { useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';

const DynamicBreadcrumbs = () => {
  const router = useRouter();
  const pathParts = router.pathname.split('/').filter((part) => part !== '');

  return (
    <Breadcrumbs className="py-1 text-brown-extreme-dark">
      {pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/');
        const isLast = index === pathParts.length - 1;

        return (
          <BreadcrumbItem
            key={href}
            href={href}
            isCurrent={isLast}
            classNames={{
              item: `hover:underline ${isLast ? 'text-secondary' : 'text-brown-extreme-dark'}`,
            }}>
            {part.charAt(0).toUpperCase() + part.slice(1)}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
