import { SVGProps } from 'react';

const Rectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d='M21 6H3V18H21V6ZM2 5V19H22V5H2Z'
      fill='currentColor'
    />
  </svg>
);

export default Rectangle;