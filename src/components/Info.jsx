import React from 'react'
import { Languages, Globe2, Library } from 'lucide-react'

export const Info = () => {
  return (
    <>
         <small className='dark:text-slate-400 text-sm text-center my-5'><Languages className='inline' size={16} /> English - Spanish |  <Globe2 className='inline' size={16} /> Colombia - Bogotá D.C. | <Library className='inline' size={16} /> Software Engineering at University</small>
    </>
  )
}
