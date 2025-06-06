import DashboardLayout from '@/components/layouts/DashboardLayout';
import PenggunaEdit from '@/components/views/Dashboard/PenggunaEdit';

const PenggunaEditPage = () => {
  return (
    <DashboardLayout
      title="Edit Profil"
      description="Halaman ini menampilkan Data Profil Pengguna"
      type="admin">
      <PenggunaEdit />
    </DashboardLayout>
  );
};

export default PenggunaEditPage;
