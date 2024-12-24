import { SVGProps } from 'react';

const Comment = (props: SVGProps<SVGSVGElement>) => (
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
      d='M18 9V6H15V5H18V2H19V5H22V6H19V9H18ZM12 20.575C16.6944 20.575 20.5 16.9597 20.5 12.5C20.5 11.6274 20.3543 10.7872 20.0848 10H21.6501C21.8782 10.7966 22 11.6348 22 12.5C22 17.7467 17.5228 22 12 22H2V12.5C2 7.25329 6.47715 3 12 3C12.6849 3 13.3538 3.06542 14 3.19003V4.6498C13.3586 4.50285 12.6889 4.425 12 4.425C7.30558 4.425 3.5 8.0403 3.5 12.5V20.575H12Z'
      fill='currentColor'
    />
  </svg>
);

export default Comment;
