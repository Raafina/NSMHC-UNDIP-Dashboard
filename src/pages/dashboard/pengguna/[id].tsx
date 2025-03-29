import DashboardLayout from '@/components/layouts/DashboardLayout';
import PenggunaDetail from '@/components/views/Dashboard/PenggunaDetail';

const PenggunaDetailPage = () => {
  return (
    <DashboardLayout
      title="Detail Pengguna"
      description="Halaman ini menampilkan Data Pengguna"
      type="admin">
      <PenggunaDetail />
    </DashboardLayout>
  );
};

export default PenggunaDetailPage;
