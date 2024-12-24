import { SVGProps } from 'react';

const Diamond = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12 5.2365L2.70018 12L12 18.7635L21.2998 12L12 5.2365ZM12 4L1 12L12 20L23 12L12 4Z'
      fill='currentColor'
    />
  </svg>
);

export default Diamond;
