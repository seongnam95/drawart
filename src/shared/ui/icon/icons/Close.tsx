import { SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6 17.49L17.49 6M17.49 17.49L6 6'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Close;
