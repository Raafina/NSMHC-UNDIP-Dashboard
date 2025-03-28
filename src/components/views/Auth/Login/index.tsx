import { Button, Card, CardBody, Input, Spinner } from '@heroui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import useLogin from './useLogin';
import { Controller } from 'react-hook-form';
import { cn } from '@/utils/cn';

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
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-60">
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
        <Image
          src="/images/logo/NSMHC_Logo.svg"
          alt="logo"
          width={400}
          height={400}
        />
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-2xl font-bold text-danger-500">Login</h2>

          {/* {errors.root && (
            <p className="mb-2 font-medium text-danger">
              {errors?.root?.message}
            </p>
          )} */}
          <form
            className={cn(
              'flex w-80 flex-col',
              Object.keys(errors).length > 0 ? 'gap-2' : 'gap-4'
            )}
            // onSubmit={handleSubmit(handleLogin)}
          >
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Email / Username"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.identifier !== undefined}
                  errorMessage={errors.identifier?.message}
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
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
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

            <Button color="secondary" size="lg" type="submit">
              {/* {isPendingLogin ? <Spinner color="white" size="sm" /> : 'Login'} */}
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
