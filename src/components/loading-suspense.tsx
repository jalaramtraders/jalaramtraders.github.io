import React from 'react';
import LoadingSpinner from './loading-spinner';

interface LoadingSuspenseProps {
  children: React.ReactNode;
}

const LoadingSuspense = ({ children }: LoadingSuspenseProps): JSX.Element => {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>{children}</React.Suspense>
  );
};

export default LoadingSuspense;
