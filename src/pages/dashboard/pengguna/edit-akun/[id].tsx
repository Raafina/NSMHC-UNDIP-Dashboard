import DashboardLayout from '@/components/layouts/DashboardLayout';
import PenggunaEditPassword from '@/components/views/Dashboard/PenggunaEditPassword';

const PenggunaEditPasswordPage = () => {
  return (
    <DashboardLayout
      title="Edit Akun"
      description="Halaman ini menampilkan Data Pengguna"
      type="admin">
      <PenggunaEditPassword />
    </DashboardLayout>
  );
};

export default PenggunaEditPasswordPage;
