import { SVGProps } from 'react';

const AlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_84_4553)'>
      <path d='M19 18.5H5' stroke='#484848' stroke-opacity='0.72549' />
      <path
        d='M16 10V16C16 16.5523 15.5523 17 15 17H14C13.4477 17 13 16.5523 13 16V10C13 9.44772 13.4477 9 14 9H15C15.5523 9 16 9.44772 16 10Z'
        fill='currentColor'
      />
      <path
        d='M11 6V16C11 16.5523 10.5523 17 10 17H9C8.44772 17 8 16.5523 8 16V6C8 5.44771 8.44772 5 9 5H10C10.5523 5 11 5.44771 11 6Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_84_4553'>
        <rect width='14' height='14' fill='white' transform='translate(5 5)' />
      </clipPath>
    </defs>
  </svg>
);

export default AlignBottom;
