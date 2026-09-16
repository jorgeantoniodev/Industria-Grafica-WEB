import * as React from "react";

export type TargetArrowIconProps = React.SVGProps<SVGSVGElement>;

export function TargetArrowIcon(props: TargetArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.543-.35-3.003-.974-4.286l-2.458 2.458C18.846 10.708 19 11.336 19 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c.664 0 1.292.154 1.828.431L16.286 2.974C15.003 2.35 13.543 2 12 2z"/>
      <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6c0-.85-.18-1.657-.498-2.387l-2.685 2.685A2.986 2.986 0 0 1 12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3c.47 0 .91.11 1.298.303L15.985 6.618A5.966 5.966 0 0 0 12 6z"/>
      <path d="M21.707 2.293a1 1 0 0 0-1.414 0l-5.5 5.5-1.793-1.793a1 1 0 0 0-1.707.707v5.5a1 1 0 0 0 1 1h5.5a1 1 0 0 0 .707-1.707l-1.793-1.793 5.5-5.5a1 1 0 0 0 0-1.414z"/>
    </svg>
  );
}
