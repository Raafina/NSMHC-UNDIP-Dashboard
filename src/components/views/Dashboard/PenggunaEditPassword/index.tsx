import { Controller } from 'react-hook-form';
import { Input } from '@heroui/react';
import usePenggunaEditPassword from './usePenggunaEditPassword';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import ButtonSave from '@/components/UI/ButtonSave';

const PenggunaEditPassword = () => {
  const {
    control,
    errors,
    isVisible,
    isVisibleConfirm,
    handleSubmit,
    toggleVisibility,
    toggleVisibilityConfirm,
  } = usePenggunaEditPassword();
  return (
    <section>
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center mb-5">
          Akun
        </h2>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Email"
              labelPlacement="outside"
              placeholder="Masukkan email"
              variant="bordered"
              autoComplete="off"
              isInvalid={errors.email !== undefined}
              errorMessage={errors.email?.message}
              className="pb-2"
              classNames={{
                label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                inputWrapper: 'border-2 border-primary',
                helperWrapper: '!py-0 !ps-2.5',
                errorMessage: 'text-small',
                base: '!py-1',
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type={isVisible ? 'text' : 'password'}
              label="Kata Sandi"
              labelPlacement="outside"
              placeholder="Masukkan Kata Sandi"
              variant="bordered"
              autoComplete="off"
              isInvalid={errors.password !== undefined}
              errorMessage={errors.password?.message}
              className="pb-2"
              classNames={{
                label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                inputWrapper: 'border-2 border-primary',
                helperWrapper: '!py-0 !ps-2.5',
                errorMessage: 'text-small',
                base: '!py-1',
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}>
                  {isVisible ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
          )}
        />
        <Controller
          name="password_confirmation"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type={isVisibleConfirm ? 'text' : 'password'}
              label="Konfirmasi Kata Sandi"
              labelPlacement="outside"
              placeholder="Masukkan Konfirmasi Kata Sandi"
              variant="bordered"
              autoComplete="off"
              isInvalid={errors.password_confirmation !== undefined}
              errorMessage={errors.password_confirmation?.message}
              className="pb-2"
              classNames={{
                label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                inputWrapper: 'border-2 border-primary',
                helperWrapper: '!py-0 !ps-2.5',
                errorMessage: 'text-small',
                base: '!py-1',
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibilityConfirm}>
                  {isVisibleConfirm ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
          )}
        />
        <div className="flex justify-end pt-2">
          <ButtonSave onPress={handleSubmit(() => '')} />
        </div>
      </div>
    </section>
  );
};

export default PenggunaEditPassword;
