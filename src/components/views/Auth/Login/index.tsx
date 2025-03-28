import { Button, Card, CardBody, Input, Spinner } from '@heroui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Image from 'next/image';
import useLogin from './useLogin';
import { Controller } from 'react-hook-form';
import { cn } from '@/utils/cn';
import { MdAdminPanelSettings } from 'react-icons/md';

const Login = () => {
  const {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    // handleLogin,
    // isPendingLogin,
    errors,
  } = useLogin();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row lg:gap-60">
      <div className="hidden md:flex w-full flex-col items-center justify-center md:w-1/2 ">
        <Image
          src="/images/logo/NSMHC_Logo.svg"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
      <div className="border rounded-3xl bg-white p-6 shadow-lg">
        {/* {errors.root && (
            <p className="mb-2 font-medium text-danger">
              {errors?.root?.message}
            </p>
          )} */}
        <form
          className={cn(
            'flex w-80 flex-col justify-center',
            Object.keys(errors).length > 0
          )}
          onSubmit={handleSubmit(() => {}) /* handleLogin */}>
          <div className="mb-2 flex flex-col items-center">
            <MdAdminPanelSettings size={100} />
            <h1 className="text-3xl text-center font-bold">Admin</h1>
          </div>
          <div className="flex flex-col gap-4">
            <Controller
              name="identifier"
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
                  isInvalid={errors.identifier !== undefined}
                  errorMessage={errors.identifier?.message}
                  classNames={{
                    label: 'font-semibold',
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
                    label: 'font-semibold',
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
            <Button color="secondary" size="lg" type="submit" radius="full">
              {/* {isPendingLogin ? <Spinner color="white" size="sm" /> : 'Login'} */}
              Masuk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
