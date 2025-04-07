import { Button } from '@heroui/react';
import { FaSave } from 'react-icons/fa';
import { Skeleton } from '@heroui/react';

interface PropTypes {
  isLoaded: boolean;
  disabled: boolean;
  children: React.ReactNode;
}

const ButtonSave = (props: PropTypes) => {
  const { isLoaded, disabled, children } = props;
  return (
    <Skeleton
      isLoaded={isLoaded}
      className="col-span-1  md:col-start-2 w-fit justify-self-end rounded-2xl">
      <Button
        color="success"
        type="submit"
        className="text-white "
        disabled={disabled}
        startContent={<FaSave className="text-brown-light" />}>
        {children}
      </Button>
    </Skeleton>
  );
};

export default ButtonSave;
