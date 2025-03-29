import usePenggunaEdit from './usePenggunaEdit';
import { Controller } from 'react-hook-form';
const PenggunaEdit = () => {
  const { control } = usePenggunaEdit();

  return (
    <div className="p-4">
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="bg-primary font-semibold text-2xl text-white px-5 py-2 text-center">
              Data Diri
            </h2>
          </div>
          <div>
            {' '}
            <h2 className="bg-primary font-semibold text-2xl text-white px-5 py-2 text-center">
              Data Anak
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenggunaEdit;
