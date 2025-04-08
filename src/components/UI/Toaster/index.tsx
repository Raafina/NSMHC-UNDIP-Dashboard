import { ReactNode } from 'react';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { cn } from '@/utils/cn';

const iconList: { [key: string]: ReactNode } = {
  success: <CiCircleCheck className="text-3xl text-white" />,
  error: <CiCircleRemove className="text-3xl text-white" />,
};

interface PropTypes {
  type: string;
  message: string;
}

const Toaster = (props: PropTypes) => {
  const { type, message } = props;
  return (
    <div
      role="alert"
      aria-labelledby="toaster-label"
      className={cn(
        'fixed right-8 top-8 z-50 max-w-xs rounded-xl bg-red-600 border-red-500 border shadow-sm',
        { 'bg-success border-success-500': type === 'success' }
      )}>
      <div className="flex items-center gap-2 p-4">
        {iconList[type]}
        <p id="toaster-label" className="text-sm text-white">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Toaster;
