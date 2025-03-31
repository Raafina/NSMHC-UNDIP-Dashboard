import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const PenggunaEditSchema = yup.object().shape({
  nama_lengkap_pengguna: yup.string().required('Nama lengkap wajib diisi'),
  usia_pengguna: yup.number().required('Usia wajib diisi'),
  pendidikan_terakhir_pengguna: yup
    .string()
    .required('Pendidikan terakhir wajib diisi'),
  pekerjaan_terakhir_pengguna: yup
    .string()
    .required('Pekerjaan terakhir wajib diisi'),
  alamat: yup.string().required('Alamat wajib diisi'),
  no_hp: yup.string().required('No HP wajib diisi'),
  nama_lengkap_anak: yup.string().required('Nama lengkap anak wajib diisi'),
  usia_anak: yup.number().required('Usia anak wajib diisi'),
  pendidikan_terakhir_anak: yup
    .string()
    .required('Pendidikan terakhir anak wajib diisi'),
  pekerjaan_terakhir_anak: yup
    .string()
    .required('Pekerjaan terakhir anak wajib diisi'),
});

const usePenggunaEdit = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PenggunaEditSchema),
  });
  return { control, errors, handleSubmit };
};

export default usePenggunaEdit;
