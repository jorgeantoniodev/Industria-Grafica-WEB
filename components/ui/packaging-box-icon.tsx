import * as React from "react";

export type PackagingBoxIconProps = React.SVGProps<SVGSVGElement>;

export function PackagingBoxIcon(props: PackagingBoxIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 1.5 L22 7 V17 L12 22.5 L2 17 V7 Z" />
      <path d="M12 12 L2 7" />
      <path d="M12 12 L22 7" />
      <path d="M12 12 V22.5" />
      <path d="M7 4.25 L17 9.75 V14" />
    </svg>
  );
}
