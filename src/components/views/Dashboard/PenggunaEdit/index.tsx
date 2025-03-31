import usePenggunaEdit from './usePenggunaEdit';
import { Controller } from 'react-hook-form';
import { Input, Select, SelectItem } from '@heroui/react';
import { NumberInput } from '@heroui/number-input';
import { PENDIDIKAN_SELECT, PEKERJAAN_SELECT } from './PenggunaEdit.constants';
import ButtonSave from '@/components/UI/ButtonSave';
const PenggunaEdit = () => {
  const { control, errors, handleSubmit } = usePenggunaEdit();

  return (
    <section>
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center">
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
                  isInvalid={errors.pendidikan_terakhir_pengguna !== undefined}
                  errorMessage={errors.pendidikan_terakhir_pengguna?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    trigger: 'border-2 !border-primary',
                    selectorIcon: 'text-primary text-2xl font-bold',
                    helperWrapper: '!py-0 !ps-2.5',
                    errorMessage: 'text-small',
                    base: '!py-1',
                  }}>
                  {PENDIDIKAN_SELECT.map((pendidikan) => (
                    <SelectItem key={pendidikan.key}>
                      {pendidikan.label}
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
                  isInvalid={errors.pekerjaan_terakhir_pengguna !== undefined}
                  errorMessage={errors.pekerjaan_terakhir_pengguna?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    trigger: 'border-2 !border-primary',
                    selectorIcon: 'text-primary text-2xl font-bold',
                    base: '!py-1',
                    helperWrapper: '!py-0 !ps-2.5',
                    errorMessage: 'text-small',
                  }}>
                  {PEKERJAAN_SELECT.map((pekerjaan) => (
                    <SelectItem key={pekerjaan.key}>
                      {pekerjaan.label}
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
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    inputWrapper: 'border-2 border-primary',
                    helperWrapper: '!py-0 !ps-2.5',
                    errorMessage: 'text-small',
                    base: '!py-1',
                  }}
                />
              )}
            />
          </div>
          <div>
            <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center mb-5">
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
                  isInvalid={errors.pendidikan_terakhir_anak !== undefined}
                  errorMessage={errors.pendidikan_terakhir_anak?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    trigger: 'border-2 !border-primary',
                    selectorIcon: 'text-primary text-2xl font-bold',
                    helperWrapper: '!py-0 !ps-2.5',
                    errorMessage: 'text-small',
                    base: '!py-1',
                  }}>
                  {PENDIDIKAN_SELECT.map((pendidikan) => (
                    <SelectItem key={pendidikan.key}>
                      {pendidikan.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>
          <ButtonSave onPress={handleSubmit(() => '')} />
        </form>
      </div>
    </section>
  );
};

export default PenggunaEdit;
