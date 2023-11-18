import React from 'react'

export const CTA = ({ctaText}) => {
  return (
    <button className='my-5 py-3 px-5 rounded-full border dark:border-white dark:text-white border-black'>
        {ctaText}
    </button>
  )
}
