import { SVGProps } from 'react';

const Add = (props: SVGProps<SVGSVGElement>) => (
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
      d='M11 13V20H13V13H20V11H13V4H11V11H4V13H11Z'
      fill='currentColor'
    />
  </svg>
);

export default Add;
