import { Controller } from 'react-hook-form';
import { Input, Select, SelectItem, Skeleton } from '@heroui/react';
import { NumberInput } from '@heroui/number-input';
import { PENDIDIKAN_SELECT, PEKERJAAN_SELECT } from './PenggunaEdit.constants';
import ButtonSave from '@/components/UI/ButtonSave';
import usePenggunaEdit from './usePenggunaEdit';
import usePenggunaDetail from '../PenggunaDetail/usePenggunaDetail';
import { useEffect } from 'react';

const PenggunaEdit = () => {
  const { dataDetailPengguna, isSuccessGetDetailPengguna } =
    usePenggunaDetail();
  const {
    control,
    errors,
    isPendingUpdatePengguna,
    handleSubmit,
    setValue,
    handleUpdatePengguna,
  } = usePenggunaEdit();

  useEffect(() => {
    if (!!dataDetailPengguna) {
      setValue('nama_lengkap_pengguna', dataDetailPengguna?.name);
      setValue('usia_pengguna', dataDetailPengguna?.user_profile?.age);
      setValue(
        'pendidikan_terakhir_pengguna',
        dataDetailPengguna?.user_profile?.last_education
      );
      setValue(
        'pekerjaan_terakhir_pengguna',
        dataDetailPengguna?.user_profile?.last_job
      );
      setValue('alamat', dataDetailPengguna?.user_profile?.address);
      setValue('no_hp', dataDetailPengguna?.user_profile?.no_hp);
      setValue('nama_lengkap_anak', dataDetailPengguna?.user_child?.name);
      setValue('usia_anak', dataDetailPengguna?.user_child?.age);
      setValue(
        'pendidikan_terakhir_anak',
        dataDetailPengguna?.user_child?.last_education
      );
    }
  }, [isSuccessGetDetailPengguna]);

  return (
    <section>
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        <form
          onSubmit={handleSubmit(handleUpdatePengguna)}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-6">
          <div className="w-full rounded-2xlo">
            <div className="flex flex-col ">
              {isSuccessGetDetailPengguna ? (
                <>
                  <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center ">
                    Data Diri
                  </h2>
                  <Controller
                    name="nama_lengkap_pengguna"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        label="Nama Lengkap"
                        labelPlacement="outside"
                        placeholder="Masukkan Nama Lengkap"
                        variant="bordered"
                        autoComplete="off"
                        isInvalid={errors.nama_lengkap_pengguna !== undefined}
                        errorMessage={errors.nama_lengkap_pengguna?.message}
                        className="pb-2"
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          inputWrapper: 'border-2 border-primary',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="usia_pengguna"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        label="Usia Anak"
                        labelPlacement="outside"
                        placeholder="Masukkan Usia Anak"
                        variant="bordered"
                        autoComplete="off"
                        isInvalid={errors.usia_pengguna !== undefined}
                        errorMessage={errors.usia_pengguna?.message}
                        className="pb-2"
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          inputWrapper: 'border-2 border-primary',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="pendidikan_terakhir_pengguna"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Pendidikan Terakhir"
                        labelPlacement="outside"
                        placeholder="Masukkan Pendidikan Terakhir"
                        variant="bordered"
                        autoComplete="off"
                        className="pb-2"
                        defaultSelectedKeys={[
                          dataDetailPengguna?.user_profile?.last_education,
                        ]}
                        isInvalid={
                          errors.pendidikan_terakhir_pengguna !== undefined
                        }
                        errorMessage={
                          errors.pendidikan_terakhir_pengguna?.message
                        }
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          trigger: 'border-2 !border-primary',
                          selectorIcon: 'text-primary text-2xl font-bold',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}>
                        {PENDIDIKAN_SELECT.map((item) => (
                          <SelectItem key={item.key} value={item.key}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Controller
                    name="pekerjaan_terakhir_pengguna"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Pekerjaan Terakhir"
                        labelPlacement="outside"
                        placeholder="Masukkan Pekerjaan Terakhir"
                        variant="bordered"
                        autoComplete="off"
                        className="pb-2"
                        defaultSelectedKeys={[
                          dataDetailPengguna?.user_profile?.last_job,
                        ]}
                        isInvalid={
                          errors.pekerjaan_terakhir_pengguna !== undefined
                        }
                        errorMessage={
                          errors.pekerjaan_terakhir_pengguna?.message
                        }
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          trigger: 'border-2 !border-primary',
                          selectorIcon: 'text-primary text-2xl font-bold',
                          base: '!py-1',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                        }}>
                        {PEKERJAAN_SELECT.map((item) => (
                          <SelectItem key={item.key} value={item.key}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Controller
                    name="alamat"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="string"
                        label="Alamat"
                        labelPlacement="outside"
                        placeholder="Masukkan Alamat"
                        variant="bordered"
                        autoComplete="off"
                        isInvalid={errors.alamat !== undefined}
                        errorMessage={errors.alamat?.message}
                        className="pb-2"
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          inputWrapper: 'border-2 border-primary',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="no_hp"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="string"
                        label="No HP"
                        labelPlacement="outside"
                        placeholder="Masukkan No HP"
                        variant="bordered"
                        autoComplete="off"
                        isInvalid={errors.no_hp !== undefined}
                        errorMessage={errors.no_hp?.message}
                        className="pb-2"
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          inputWrapper: 'border-2 border-primary',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}
                      />
                    )}
                  />
                </>
              ) : (
                <>
                  <Skeleton
                    isLoaded={
                      !!dataDetailPengguna && isSuccessGetDetailPengguna
                    }
                    className="w-full rounded-2xl h-96"
                  />
                </>
              )}
            </div>
          </div>

          <div className="w-full rounded-2xl">
            <div>
              {isSuccessGetDetailPengguna ? (
                <>
                  <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center">
                    Data Anak
                  </h2>
                  <Controller
                    name="nama_lengkap_anak"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="string"
                        label="Nama Lengkap Anak"
                        labelPlacement="outside"
                        placeholder="Masukkan Nama Lengkap Anak"
                        variant="bordered"
                        autoComplete="off"
                        isInvalid={errors.nama_lengkap_anak !== undefined}
                        errorMessage={errors.nama_lengkap_anak?.message}
                        className="pb-2"
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          inputWrapper: 'border-2 border-primary',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="usia_anak"
                    control={control}
                    render={({ field }) => (
                      <NumberInput
                        {...field}
                        label="Usia Anak"
                        labelPlacement="outside"
                        placeholder="Masukkan Usia Anak"
                        variant="bordered"
                        autoComplete="off"
                        isInvalid={errors.usia_anak !== undefined}
                        errorMessage={errors.usia_anak?.message}
                        className="pb-2"
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          inputWrapper: 'border-2 border-primary',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="pendidikan_terakhir_anak"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        label="Pendidikan Terakhir"
                        labelPlacement="outside"
                        placeholder="Masukkan Pendidikan Terakhir"
                        variant="bordered"
                        autoComplete="off"
                        className="pb-2"
                        defaultSelectedKeys={[
                          dataDetailPengguna?.user_child?.last_education,
                        ]}
                        isInvalid={
                          errors.pendidikan_terakhir_anak !== undefined
                        }
                        errorMessage={errors.pendidikan_terakhir_anak?.message}
                        classNames={{
                          label:
                            'font-semibold !text-primary !top-[26px] !left-2 ',
                          trigger: 'border-2 !border-primary',
                          selectorIcon: 'text-primary text-2xl font-bold',
                          helperWrapper: '!py-0 !ps-2.5',
                          errorMessage: 'text-small',
                          base: '!py-1',
                        }}>
                        {PENDIDIKAN_SELECT.map((item) => (
                          <SelectItem key={item.key} value={item.key}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                </>
              ) : (
                <>
                  <Skeleton
                    isLoaded={
                      !!dataDetailPengguna && isSuccessGetDetailPengguna
                    }
                    className="w-full rounded-2xl h-96"
                  />
                </>
              )}
            </div>
          </div>
          <ButtonSave
            isLoaded={!!dataDetailPengguna}
            disabled={isPendingUpdatePengguna}>
            {isPendingUpdatePengguna ? 'Menyimpan...' : 'Simpan'}
          </ButtonSave>
        </form>
      </div>
    </section>
  );
};

export default PenggunaEdit;
