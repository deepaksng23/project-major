import React from 'react'
import LoginForm from "../components/LoginForm"
import frameImg from "../assets/frame.png";
import image from "../assets/Designer.png";

const Login = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
            <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
                <h1 className="text-5xl font-semibold leading-[2.375rem] text-richblack-25 mb-16">Welcome Back</h1>
                <LoginForm/>
            </div>
            <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
              {/* Frame */}
              <img
                src={frameImg}
                alt="Pattern Frame"
                className="absolute top-0 w-[90%] scale-110 h-96 z-10"
                loading="lazy"
              />
              {/* Image */}
              <img
                src={image}
                alt="Doctor"
                loading="lazy"
                className="relative w-full h-auto z-20 drop-shadow-lg"
              />
            </div>
        </div>
    </div>
  )
}

export default Login