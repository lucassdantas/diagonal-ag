import React from 'react'
import Marquee from 'react-fast-marquee';

export const Forms = () => {
  return (
    <Marquee autoFill>
        <SvgForms />
    </Marquee>
  );
};

const SvgForms = () => {
  return (
    <div className="flex gap-4 mx-2 h-[105px] overflow-y-hidden">
      <svg width="100" height="100" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="63.5" cy="63.5" r="63" stroke="#CB99FF" strokeWidth="2" fill="none" />
      </svg>
      <svg width="100" height="100" viewBox="0 0 176 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M175.5 31.691V117.5H47.3615L0.5 87.2913V0.5H128.875L152.235 16.1275L175.5 31.691Z"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <svg width="100" height="100" viewBox="0 0 117 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.866126 117.5L68.4315 0.5H116.134L48.5685 117.5H0.866126Z"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <svg width="100" height="100" viewBox="0 0 137 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.9046 117.449L68.1366 1L135.369 117.449H0.9046Z"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <svg width="100" height="100" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4.5"
          y="0.5"
          width="117"
          height="117"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
          shapeRendering="crispEdges"
        />
      </svg>
      <svg width="100" height="100" viewBox="0 0 137 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.34112 117.449L135.696 1.09445V117.449H1.34112Z"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <svg width="100" height="100" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.75575 117.5L37.4769 40.5H88.5231L121.244 117.5H4.75575Z"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
          shapeRendering="crispEdges"
        />
        <path
          d="M7.74812 75.5L38.7948 0.5H87.2052L118.252 75.5H7.74812Z"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
          shapeRendering="crispEdges"
        />
      </svg>
      <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="59.7192"
          y="0.987807"
          width="83.4558"
          height="83.4558"
          transform="rotate(45 59.7192 0.987807)"
          stroke="#CB99FF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

