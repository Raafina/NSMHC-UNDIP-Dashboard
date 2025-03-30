import usePenggunaEdit from './usePenggunaEdit';
import { Controller } from 'react-hook-form';
import { Input, Select, SelectItem } from '@heroui/react';
import { NumberInput } from '@heroui/number-input';
import { PENDIDIKAN_SELECT, PEKERJAAN_SELECT } from './PenggunaEdit.constants';
import ButtonSave from '@/components/UI/ButtonSave';
const PenggunaEdit = () => {
  const { control, errors, handleSubmit } = usePenggunaEdit();

  return (
    <div className="p-4">
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center mb-10">
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
                  placeholder="Masukkan email"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.nama_lengkap_pengguna !== undefined}
                  errorMessage={errors.nama_lengkap_pengguna?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    inputWrapper: 'border-2 border-primary',
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
                  placeholder="Masukkan pendidikan terakhir"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.pendidikan_terakhir_pengguna !== undefined}
                  errorMessage={errors.pendidikan_terakhir_pengguna?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    trigger: 'border-2 !border-primary',
                    selectorIcon: 'text-primary text-2xl font-bold',
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
                  placeholder="Masukkan pekerjaan terakhir"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.pekerjaan_terakhir_pengguna !== undefined}
                  errorMessage={errors.pekerjaan_terakhir_pengguna?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    trigger: 'border-2 !border-primary',
                    selectorIcon: 'text-primary text-2xl font-bold',
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
                  placeholder="Masukkan alamat"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.alamat !== undefined}
                  errorMessage={errors.alamat?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    inputWrapper: 'border-2 border-primary',
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
                  }}
                />
              )}
            />
          </div>
          <div>
            <h2 className="bg-primary font-semibold text-xl md:text-2xl text-white px-5 py-2 text-center mb-10">
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
                  placeholder="Masukkan pendidikan terakhir"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.pendidikan_terakhir_anak !== undefined}
                  errorMessage={errors.pendidikan_terakhir_anak?.message}
                  className="pb-2"
                  classNames={{
                    label: 'font-semibold !text-primary !top-[26px] !left-2 ',
                    trigger: 'border-2 !border-primary',
                    selectorIcon: 'text-primary text-2xl font-bold',
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
    </div>
  );
};

export default PenggunaEdit;
