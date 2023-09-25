import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName:"", lastName: "", email: "", password: "", confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accType, setAccType] = useState("student");
 
  function changeHandler(event) {
    setFormData ((prevData) => ({
        ...prevData,
        [event.target.name] : event.target.value
    }
  ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return ;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...formData
    }
    const finalData = {
        ...accountData,
        accType 
    }
    console.log("printing final data")
    console.log(finalData);
    navigate("/dashboard");
}

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max my-3">

        <button 
            className={`${accType === "student"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"}
            py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccType("student")}>
            Student
        </button>

        <button
            className={`${accType === "instructor"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"}
            py-2 px-5 rounded-full transition-shadow duration-500 `}
            onClick={() => setAccType("instructor")}>
            Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='flex gap-2'>
            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    First Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-[14.2vw] p-[9px] text-richblack-5 ml-[2px] mb-3"
                    required
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    onChange={changeHandler}
                    value={formData.firstName}
                />
            </label>

            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Last Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-[14.4vw] p-[9px] text-richblack-5"
                    required
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    onChange={changeHandler}
                    value={formData.lastName}
                />
            </label>
        </div>


        <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[9px] text-richblack-5 mb-3 ml-[2px]"
                    required
                    type='email'
                    name='email'
                    placeholder='Enter Email Address'
                    onChange={changeHandler}
                    value={formData.email}
                />
        </label>


        <div className='flex gap-2'>
            <label className='relative'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Create Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-[14.4vw] p-[9px] text-richblack-5 ml-[2px]"
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    value={formData.password}
                />
                <span onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-[38px] cursor-pointer "
                > {/*setPassword to true and false */}
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            <label className='relative'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Confirm Password<sup className="text-pink-200">*</sup>
                </p>
                <input
                    className="bg-richblack-800 rounded-[0.75rem] w-[14.4vw] p-[9px] text-richblack-5"
                    required
                    type={showPassword2 ? ("text") : ("password")}
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                />
                <span onClick={() => setShowPassword2((prev) => !prev)}
                       className="absolute right-3 top-[38px] cursor-pointer "
                > {/*setPassword to true and false */}
                    {showPassword2 ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
        </div>

        <button className="bg-yellow-50 w-full py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
            Create Account
        </button>

        <div className='flex w-full items-center my-3 gap-x-2'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading[1.375rem]'>
            OR
          </p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
          border border-richblack-700 px-[12px] py-[8px] gap-x-2'>
          <FcGoogle/>
          <p>Sign Up with Google</p>
        </button>

      </form>
    </div>
  )
}

export default SignupForm
