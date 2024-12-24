import { SVGProps } from 'react';

const InternalStorage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 5H8V7H19V5ZM19 8H8V19H19V8ZM7 7V5H5V7H7ZM5 8V19H7V8H5ZM5 4H4V5V19V20H5H19H20V19V5V4H19H5Z'
      fill='currentColor'
    />
  </svg>
);

export default InternalStorage;
