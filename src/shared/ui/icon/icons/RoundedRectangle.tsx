import { SVGProps } from 'react';

const RoundedRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d='M18 6H6C4.34315 6 3 7.34315 3 9V15C3 16.6569 4.34315 18 6 18H18C19.6569 18 21 16.6569 21 15V9C21 7.34315 19.6569 6 18 6ZM6 5C3.79086 5 2 6.79086 2 9V15C2 17.2091 3.79086 19 6 19H18C20.2091 19 22 17.2091 22 15V9C22 6.79086 20.2091 5 18 5H6Z'
      fill='currentColor'
    />
  </svg>
);

export default RoundedRectangle;
