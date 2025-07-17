interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-4',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner;