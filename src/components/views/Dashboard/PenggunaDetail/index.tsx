import Image from 'next/image';
import { IoPersonCircleSharp } from 'react-icons/io5';

const PenggunaDetail = () => {
  return (
    <section>
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        <div className="flex flex-col items-center justify-center">
          <IoPersonCircleSharp className="text-blue" size={160} />
          <h3 className="font-medium text-2xl">Ki Hajar Dewantoro</h3>
          <p className="font-medium text-xl">08123456789</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-20 pt-6">
          <div className="grid grid-cols-[max-content_10px_auto] gap-x-2 w-fit font-medium">
            <div>Usia</div>
            <div>:</div>
            <div>60</div>

            <div>Pendidikan</div>
            <div>:</div>
            <div>S3</div>

            <div>Pekerjaan</div>
            <div>:</div>
            <div>Pegawai Negeri</div>

            <div>Alamat</div>
            <div>:</div>
            <div>Desa Pahlawan, Kecamatan Pahlawan, Kabupaten Pahlawan</div>
          </div>
          <div className="grid grid-cols-[max-content_10px_auto] gap-x-2 w-fit font-medium">
            <div>Nama Anak</div>
            <div>:</div>
            <div>Udin Supratman</div>

            <div>Usia</div>
            <div>:</div>
            <div>30</div>

            <div>Pendidikan</div>
            <div>:</div>
            <div>S1</div>

            <div>Pekerjaan</div>
            <div>:</div>
            <div>Pegawai negeri</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenggunaDetail;
