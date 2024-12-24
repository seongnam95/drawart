import { SVGProps } from 'react';

const Ban = (props: SVGProps<SVGSVGElement>) => (
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
      d='M20 12C20 16.4183 16.4183 20 12 20C9.97079 20 8.11804 19.2445 6.70769 17.9994L17.9994 6.70769C19.2445 8.11804 20 9.97079 20 12ZM6.00058 17.2923L17.2923 6.00058C15.882 4.75551 14.0292 4 12 4C7.58172 4 4 7.58172 4 12C4 14.0292 4.75551 15.882 6.00058 17.2923ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
      fill='currentColor'
    />
  </svg>
);

export default Ban;
