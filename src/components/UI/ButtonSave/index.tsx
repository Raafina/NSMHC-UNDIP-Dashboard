import { Button } from '@heroui/react';
import { FaSave } from 'react-icons/fa';

const ButtonSave = () => {
  return (
    <Button
      color="success"
      type="submit"
      className="text-white col-span-1  md:col-start-2 w-fit justify-self-end"
      startContent={<FaSave className="text-brown-light" />}>
      Simpan
    </Button>
  );
};

export default ButtonSave;
