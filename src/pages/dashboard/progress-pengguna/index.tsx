import DashboardLayout from '@/components/layouts/DashboardLayout';
import ProgressPengguna from '@/components/views/Dashboard/ProgressPengguna';

const ProgressPenggunaPage = () => {
  return (
    <DashboardLayout
      title="Progress Pengguna"
      description="Halaman ini menampilkan Progress Data Pengguna"
      type="admin">
      <ProgressPengguna />
    </DashboardLayout>
  );
};

export default ProgressPenggunaPage;
