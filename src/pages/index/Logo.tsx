import { AppConfig } from '../../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  size?: 'sm' | 'md' | 'lg'; // Add a size prop with options for small, medium, large
};

const Logo = (props: ILogoProps) => {
  const { xl, size = 'sm' } = props; // Default to 'sm' if no size is provided

  const fontStyle = xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  const sizeClasses = {
    sm: 'w-8 h-8', // Small size
    md: 'w-12 h-12', // Medium size (for reference)
    lg: 'w-16 h-16', // Large size (for reference)
  };

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/New_trioe_small.png"
        className={`${sizeClasses[size]} mr-2`} // Apply size to the image
        alt="Trioe Logo1"
      />
      {AppConfig.site_name}
    </span>
  );
};

export default Logo;
