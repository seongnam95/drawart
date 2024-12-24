import { SVGProps } from 'react';

const MinimizeLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d='M19 6H9V18H19C19.5523 18 20 17.5523 20 17V7C20 6.44772 19.5523 6 19 6ZM5 6H8V18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6ZM5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM5 8H7V7.5H5V8ZM7 9H5V8.5H7V9ZM5 10H7V9.5H5V10Z'
      fill='currentColor'
    />
  </svg>
);

export default MinimizeLeft;
