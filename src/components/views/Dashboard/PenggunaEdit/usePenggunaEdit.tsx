import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { ToasterContext } from '@/contexts/ToasterContext';
import { useContext } from 'react';
import { IUpdatePenggunaPayload } from '@/types/Pengguna';
import * as yup from 'yup';
import penggunaServices from '@/services/pengguna.service';

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
});

const usePenggunaEdit = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { setToaster } = useContext(ToasterContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(PenggunaEditSchema),
  });

  const updatePengguna = async (payload: IUpdatePenggunaPayload) => {
    const data = await penggunaServices.updatePengguna(`${query.id}`, payload);
    return data.data;
  };

  const {
    mutate: mutateUpdatePengguna,
    isPending: isPendingUpdatePengguna,
    isSuccess: isSuccessUpdatePengguna,
  } = useMutation({
    mutationFn: (payload: IUpdatePenggunaPayload) => updatePengguna(payload),
    onError: (error) => {
      setToaster({
        type: 'error',
        message: error.message,
      });
    },
    onSuccess: () => {
      setToaster({
        type: 'success',
        message: 'Berhasil memperbarui data pengguna',
      });
      router.push('/dashboard/pengguna');
    },
  });

  const handleUpdatePengguna = (payload: IUpdatePenggunaPayload) => {
    mutateUpdatePengguna(payload);
  };

  return {
    control,
    errors,
    handleSubmit,
    setValue,
    handleUpdatePengguna,
    isPendingUpdatePengguna,
    isSuccessUpdatePengguna,
  };
};

export default usePenggunaEdit;
