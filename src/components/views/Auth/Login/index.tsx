import { Button, Input, Spinner } from '@heroui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Image from 'next/image';
import useLogin from './useLogin';
import { Controller } from 'react-hook-form';
import { cn } from '@/utils/cn';
import { MdAdminPanelSettings } from 'react-icons/md';
import { motion } from 'framer-motion';

const Login = () => {
  const {
    isVisible,
    control,
    isPendingLogin,
    errors,
    toggleVisibility,
    handleSubmit,
    handleLogin,
  } = useLogin();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row lg:gap-60">
      <motion.div className="hidden md:flex w-full flex-col items-center justify-center md:w-1/2 "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}>
        <Image
          src="/images/logo/NSMHC_Logo.svg"
          alt="logo"
          width={400}
          height={400}
        />
        <h1 className="text-5xl font-bold mt-5 tracking-widest">NSMHC</h1>
        <p className="text-sm">Nursing Students Mother Heart Connection</p>
      </motion.div>
      <motion.div className="border rounded-3xl bg-white p-6 shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}>
        {errors.root && (
          <p className="mb-2 font-medium text-danger">
            {errors?.root?.message}
          </p>
        )}
        <form
          className={cn(
            'flex w-80 flex-col justify-center',
            Object.keys(errors).length > 0
          )}
          onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-2 flex flex-col items-center">
            <MdAdminPanelSettings size={100} />
            <h1 className="text-3xl text-center font-bold">Admin</h1>
          </div>
          <div className="flex flex-col">
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
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Masukkan kata sandi"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
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
            <Button
              color="secondary"
              size="lg"
              type="submit"
              radius="full"
              className="mt-3">
              {isPendingLogin ? <Spinner color="white" size="sm" /> : 'Masuk'}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
