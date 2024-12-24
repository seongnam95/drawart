import { SVGProps } from 'react';

const TextAlignCenter = (props: SVGProps<SVGSVGElement>) => (
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
      d='M21 6C21 6.55228 20.5523 7 20 7H5C4.44772 7 4 6.55228 4 6C4 5.44771 4.44772 5 5 5H20C20.5523 5 21 5.44771 21 6ZM22 12C22 12.5523 21.5523 13 21 13H3C2.44771 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12ZM18 19C18.5523 19 19 18.5523 19 18C19 17.4477 18.5523 17 18 17H7C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H18Z'
      fill='currentColor'
    />
  </svg>
);

export default TextAlignCenter;
