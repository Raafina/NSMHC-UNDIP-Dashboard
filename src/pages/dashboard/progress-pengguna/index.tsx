import DashboardLayout from '@/components/layouts/DashboardLayout';
import Progress_Pengguna from '@/components/views/Dashboard/Progress_Pengguna';
const Progress_PenggunaPage = () => {
  return (
    <DashboardLayout
      title="Progress Pengguna"
      description="Halaman ini menampilkan Progress Data Pengguna"
      type="admin">
      <Progress_Pengguna />
    </DashboardLayout>
  );
};

export default Progress_PenggunaPage;
