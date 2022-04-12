import React from 'react';

type LoadingSpinnerProps = {
  message?: string;
};

const LoadingSpinner = ({
  message = 'Loading...',
}: LoadingSpinnerProps): JSX.Element => {
  return (
    <div className='loader center'>
      <i className='fa fa-cog fa-spin' />
      <div>{message}</div>
    </div>
  );
};

export default LoadingSpinner;
