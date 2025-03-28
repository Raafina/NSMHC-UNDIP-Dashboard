import Image from 'next/image';
import PageHead from '@/components/commons/PageHead';
import { useRouter } from 'next/router';

const staticImages = [
  {
    src: '/images/illustration/star-brown-dark.svg',
    width: 30,
    height: 30,
    style: 'top-50 left-40',
  },
  {
    src: '/images/illustration/star-brown-dark.svg',
    width: 30,
    height: 30,
    style: 'bottom-40 left-50',
  },
  {
    src: '/images/illustration/star-brown-light.svg',
    width: 30,
    height: 30,
    style: 'top-20 right-70',
  },
  {
    src: '/images/illustration/star-brown-light.svg',
    width: 30,
    height: 30,
    style: 'top-60 right-80',
  },
  {
    src: '/images/illustration/star-brown-dark.svg',
    width: 30,
    height: 30,
    style: 'top-1/4 right-1/4',
  },
  {
    src: '/images/illustration/hole-brown-dark-extreme.svg',
    width: 80,
    height: 80,
    style: 'top-20 left-1/4',
  },
  {
    src: '/images/illustration/hole-brown-dark-extreme.svg',
    width: 80,
    height: 80,
    style: 'bottom-10 right-1/3 rotate-90',
  },
  {
    src: '/images/illustration/hole-white.svg',
    width: 80,
    height: 80,
    style: 'bottom-10 right-2/3 rotate-25',
  },
  {
    src: '/images/illustration/star-brown-dark.svg',
    width: 30,
    height: 30,
    style: 'top-1/3 left-1/4',
  },
  {
    src: '/images/illustration/star-brown-light.svg',
    width: 30,
    height: 30,
    style: 'top-1/2 right-1/4',
  },
  {
    src: '/images/illustration/hole-brown-dark-extreme.svg',
    width: 60,
    height: 60,
    style: 'bottom-1/3 left-1/3 ',
  },
  {
    src: '/images/illustration/hole-white.svg',
    width: 60,
    height: 60,
    style: 'bottom-1/4 right-1/4 rotate-45',
  },
];

const NotFound = () => {
  const router = useRouter();

  const getRandomPosition = () => ({
    top: `${Math.random() * 80}vh`,
    left: `${Math.random() * 80}vw`,
  });

  return (
    <div className="relative flex min-h-screen min-w-full flex-col items-center justify-center overflow-hidden gap-10 py-10 lg:py-0">
      <PageHead title="Halaman Tidak Ditemukan" />

      {staticImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt="icon"
          width={image.width}
          height={image.height}
          className={`absolute ${image.style}`}
        />
      ))}

      <section className="relative max-w-screen-lg 3xl:container p-6">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/images/illustration/404.svg"
            alt="logo"
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-1 md:gap-4 justify-center md:ps-6 pt-2">
            <p className="text-2xl md:text-6xl font-medium">Oops!</p>
            <p className="text-base md:text-4xl font-medium">
              Kami tidak dapat menemukan halaman yang Anda cari
            </p>
            <button
              onClick={router.back}
              className="bg-brown-extreme-dark hover:bg-opacity-90 cursor-pointer rounded-md font-medium text-white text-base md:text-4xl px-2 py-1 md:px-6 md:py-3 w-fit">
              Kembali
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
