import { Button } from '@heroui/react';
import { FaSave } from 'react-icons/fa';
import { Skeleton } from '@heroui/react';

interface PropTypes {
  isLoaded: boolean;
}

const ButtonSave = (props: PropTypes) => {
  const { isLoaded } = props;
  return (
    <Skeleton
      isLoaded={isLoaded}
      className="col-span-1  md:col-start-2 w-fit justify-self-end rounded-2xl">
      <Button
        color="success"
        type="submit"
        className="text-white "
        startContent={<FaSave className="text-brown-light" />}>
        Simpan
      </Button>
    </Skeleton>
  );
};

export default ButtonSave;
