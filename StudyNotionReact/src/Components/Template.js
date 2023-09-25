import React from 'react'
import frameImage from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 overflow-hidden'>
      
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.6rem] leading[1.2rem] -mt-8'>
          {title}
        </h1>

        <p className='text-[1.1rem] leading[1.4rem] mt-4'>
          <span className='text-richblack-100'>{desc1}</span>
          <br/>
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formtype === "signup" ?
       (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
       (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }
      </div>


      <div className='relative w-11/12 max-w-[450px] mt-6'>
        <img src={frameImage}
            alt='frame' 
            width={558}
            height={504}
            loading='lazy' 
        />
        <img src={image}
            alt='students'
            width={558}
            height={480}
            loading='lazy' 
            className='absolute -top-4 right-4 mt-6' 
        /> {/*-top-4 means top se minus 4 */}
      </div>
    </div>
  )
}

export default Template
