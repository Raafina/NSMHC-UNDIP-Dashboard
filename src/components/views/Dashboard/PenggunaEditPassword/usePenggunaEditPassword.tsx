import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const PenggunaEditPasswordSchema = yup.object().shape({
  email: yup.string().required('Email wajib diisi'),
  password: yup.string().required('Kata Sandi wajib diisi'),
  password_confirmation: yup
    .string()
    .required('Konfirmasi Kata Sandi wajib diisi')
    .oneOf([yup.ref('password')], 'Konfirmasi Kata Sandi harus sama'),
});

const usePenggunaEditPassword = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PenggunaEditPasswordSchema),
  });
  return {
    control,
    errors,
    isVisible,
    isVisibleConfirm,
    handleSubmit,
    toggleVisibility,
    toggleVisibilityConfirm,
  };
};

export default usePenggunaEditPassword;
