import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './LoadingSpinnerStyles';

const LoadingSpinner = () => {
  return (
    <>
      <LoaderWrapper>
        <ThreeDots
          height="120"
          width="120"
          color="#c084fc"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </LoaderWrapper>
    </>
  );
};

export default LoadingSpinner;
