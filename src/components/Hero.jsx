import React from 'react'
import { Info } from './Info'
import { CTA } from './CTA'

export const Hero = ({userPhoto, userName, userAge, userRol, userSeniority}) => {
  return (
    <>
        <div className='flex justify-center items-center m-5'>
            <div className='text-center content-center'>
                <img className='rounded-full w-52 my-5 mx-auto border-2 border-slate-950 dark:border-white' src={userPhoto} alt={userName + " Photo"} />
                <h1 className='text-3xl dark:text-white font-bold'>{userName + ", " + userAge}</h1>
                <small className='dark:text-white my-3'>{userSeniority + " " + userRol}</small>
                    <br />
                <Info />
                    <br />
                <CTA 
                    ctaText={"Contact Me"}
                />
            </div>
        </div>
    </>
  )
}
