import { SVGProps } from 'react';

const MinimizeRight = (props: SVGProps<SVGSVGElement>) => (
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
      d='M5 6H15V18H5C4.4477 18 4 17.5523 4 17V7C4 6.44772 4.4477 6 5 6ZM19 6H16V18H19C19.5523 18 20 17.5523 20 17V7C20 6.44772 19.5523 6 19 6ZM19 5C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.8954 19 3 18.1046 3 17V7C3 5.89543 3.8954 5 5 5H19ZM19 8H17V7.5H19V8ZM17 9H19V8.5H17V9ZM19 10H17V9.5H19V10Z'
      fill='currentColor'
    />
  </svg>
);

export default MinimizeRight;
