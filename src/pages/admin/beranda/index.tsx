import DashboardLayout from '@/components/layouts/DashboardLayout';
import Beranda from '@/components/views/Admin/Beranda';
const BerandaPage = () => {
  return (
    <DashboardLayout
      title="Beranda"
      description="Halaman ini menampilkan Data Pengguna"
      type="admin">
      <Beranda />
    </DashboardLayout>
  );
};

export default BerandaPage;
