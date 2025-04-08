import { useRouter } from 'next/router';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';

const DynamicBreadcrumbs = () => {
  const router = useRouter();

  // Ambil path dari file route (bisa berisi [id], dll)
  const pathParts = router.pathname
    .split('/')
    .filter((part) => part !== '' && !part.startsWith('[')); // buang dynamic param

  // Ambil path dari URL nyata (bisa /edit-akun/123)
  const pathAsParts = router.asPath
    .split('/')
    .filter((part) => part !== '' && !/^\d+$/.test(part)); // buang angka/id

  return (
    <Breadcrumbs>
      {pathParts.map((part, index) => {
        const href = '/' + pathAsParts.slice(0, index + 1).join('/');
        const isLast = index === pathParts.length - 1;

        const label = part
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <BreadcrumbItem
            key={href}
            href={isLast ? undefined : href}
            classNames={{
              item: `hover:underline ${isLast ? 'text-secondary' : 'text-brown-extreme-dark'}`,
            }}>
            {label}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
