import DashboardLayout from '@/components/layouts/DashboardLayout';
import Pengguna from '@/components/views/Dashboard/Pengguna';
const PenggunaPage = () => {
  return (
    <DashboardLayout
      title="Pengguna"
      description="Halaman ini menampilkan Data Pengguna"
      type="admin">
      <Pengguna />
    </DashboardLayout>
  );
};

export default PenggunaPage;
