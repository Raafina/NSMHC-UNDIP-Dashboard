import { Card } from '@heroui/react';
import { FaUser } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaBaby } from 'react-icons/fa';

const Beranda = () => {
  return (
    <section className="p-4 flex flex-col gap-2 md:gap-4 ">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <div className="flex flex-row items-center p-4 md:p-9  rounded-2xl bg-brown-lighter text-brown-extreme-dark">
          <FaUser className="w-8 h-8 md:w-16 md:h-16" />
          <p className="md:text-6xl flex-1 text-center truncate">99999</p>
        </div>
        <div className="flex flex-row items-center p-4 md:p-9  rounded-2xl bg-brown-lighter text-brown-extreme-dark">
          <MdPhoneAndroid className="w-8 h-8 md:w-16 md:h-16" />
          <p className="md:text-6xl flex-1 text-center truncate">99999</p>
        </div>
        <div className="flex flex-row items-center p-4 md:p-9  rounded-2xl bg-brown-lighter text-brown-extreme-dark">
          <FaBaby className="w-8 h-8 md:w-16 md:h-16" />
          <p className="md:text-6xl flex-1 text-center truncate">99999</p>
        </div>
      </div>
      <div className="flex flex-row items-center p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark h-96"></div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
        <div className="rounded-2xl bg-brown-lighter text-brown-extreme-dark h-60 md:col-span-3"></div>
        <div className="rounded-2xl bg-brown-lighter text-brown-extreme-dark h-60 md:col-span-2"></div>
      </div>
    </section>
  );
};

export default Beranda;
