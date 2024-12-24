import { SVGProps } from 'react';

const LineDot = (props: SVGProps<SVGSVGElement>) => (
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
      d='M5.5 11.5H4.5V12.5H5.5V11.5ZM7.5 11.5H6.5V12.5H7.5V11.5ZM8.5 11.5H9.5V12.5H8.5V11.5ZM11.5 11.5H10.5V12.5H11.5V11.5ZM12.5 11.5H13.5V12.5H12.5V11.5ZM15.5 11.5H14.5V12.5H15.5V11.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM19.5 11.5H18.5V12.5H19.5V11.5Z'
      fill='currentColor'
    />
  </svg>
);

export default LineDot;
