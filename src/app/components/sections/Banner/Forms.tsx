import React from 'react'
import Marquee from 'react-fast-marquee';

export const Forms = () => {
  return (
    <Marquee autoFill  className='overflow-y-hidden'>
        <SvgForms className='mr-6'/>
    </Marquee>
  );
};

const SvgForms = ({className=''}:{className:string}) => {
  return (
    <svg width="1178" height="131" viewBox="0 0 1178 131" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g filter="url(#filter0_d_419_52)">
        <rect x="608" y="6" width="117" height="117" stroke="#CB99FF" shapeRendering="optimizeQuality"/>
      </g>
      <g filter="url(#filter1_d_419_52)">
        <path d="M921.756 122.5L954.477 45.5H1005.52L1038.24 122.5H921.756Z" stroke="#CB99FF" shapeRendering="optimizeQuality"/>
      </g>
      <g filter="url(#filter2_d_419_52)">
        <path d="M924.748 80.5L955.795 5.5H1004.21L1035.25 80.5H924.748Z" stroke="#CB99FF" shapeRendering="optimizeQuality"/>
      </g>
      <rect x="1117.72" y="4.98781" width="83.4558" height="83.4558" transform="rotate(45 1117.72 4.98781)" stroke="#B581EA"/>
      <path d="M441.904 122.449L509.136 6L576.368 122.449H441.904Z" stroke="#CB99FF"/>
      <path d="M357.866 122.5L425.431 5.5H473.134L405.569 122.5H357.866Z" stroke="#CB99FF"/>
      <path d="M329.5 36.691V122.5H201.362L154.5 92.2913V5.5H282.875L306.235 21.1275L329.5 36.691Z" stroke="#CB99FF"/>
        <circle cx="63.5" cy="63.5" r="63" stroke="#CB99FF"/>
      <path d="M756.341 122.449L890.696 6.09445V122.449H756.341Z" stroke="#CB99FF"/>
      <defs>
        <filter id="filter0_d_419_52" x="603" y="5" width="126" height="126" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_419_52"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_419_52" result="shape"/>
        </filter>
        <filter id="filter1_d_419_52" x="917" y="45" width="126" height="86" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_419_52"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_419_52" result="shape"/>
        </filter>
        <filter id="filter2_d_419_52" x="920" y="5" width="120" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_419_52"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_419_52" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

