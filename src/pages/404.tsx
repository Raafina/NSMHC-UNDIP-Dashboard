import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="h-full grid grid-cols-2">
      <div className="flex justify-center items-center">
        {' '}
        <Image
          src="/images/illustrator/404.svg"
          alt="404"
          width={400}
          height={400}
          className="self-center"
        />
      </div>

      <div className="">
        <p className="text-6xl">Oops!</p>
        <p className="text-4xl w-1/2">
          We couldn’t find the page you were looking for
        </p>
      </div>
    </div>
  );
}
