import React from 'react'

export const SvgBars = ({className=''}:{className?:string}) => {
  return (
    <svg width="150" height="133" viewBox="0 0 72 133" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0.710059 104.944L38.0982 0.5H80.5012L43.1131 104.944H0.710059Z" stroke="#9E67D7"/>
      <path d="M12.4988 132.451L49.8869 28.0073H92.29L54.9019 132.451H12.4988Z" stroke="#9E67D7"/>
    </svg>

  )
}

export const DesktopSvgBars = ({className=''}:{className?:string}) => {
  return(
    <svg width="299" height="428" viewBox="0 0 299 428" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0.710059 338.507L121.708 0.5H260.388L139.391 338.507H0.710059Z" stroke="#9E67D7"/>
      <path d="M38.6117 426.944L159.609 88.9375H298.29L177.292 426.944H38.6117Z" stroke="#9E67D7"/>
    </svg>
  )
}

