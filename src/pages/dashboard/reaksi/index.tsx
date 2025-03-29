import DashboardLayout from '@/components/layouts/DashboardLayout';
import Reaksi from '@/components/views/Dashboard/Reaksi';

const ReaksiPage = () => {
  return (
    <DashboardLayout
      title="Reaksi Pengguna"
      description="Halaman ini menampilkan Reaksi Data Pengguna"
      type="admin">
      <Reaksi />
    </DashboardLayout>
  );
};

export default ReaksiPage;
