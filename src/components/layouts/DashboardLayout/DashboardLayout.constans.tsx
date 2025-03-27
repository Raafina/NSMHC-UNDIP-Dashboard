import { MdDashboard } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { LuSmilePlus } from 'react-icons/lu';
import { CgDatabase } from 'react-icons/cg';

const SIDEBAR_ADMIN = [
  {
    key: 'beranda',
    label: 'Beranda',
    href: '/admin/beranda',
    icon: <MdDashboard />,
  },
  {
    key: 'pengguna',
    label: 'Pengguna',
    href: '/admin/pengguna',
    icon: <FaUser />,
  },
  {
    key: 'reaksi',
    label: 'Reaksi',
    href: '/admin/reaksi',
    icon: <LuSmilePlus />,
  },
  {
    key: 'progress-pengguna',
    label: 'Progress Pengguna',
    href: '/admin/progress-pengguna',
    icon: <CgDatabase />,
  },
];

export { SIDEBAR_ADMIN };
