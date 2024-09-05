import React from 'react';
import frameImg from '../assets/frame.png';
import SignupForm from '../components/SignupForm';
import image from '../assets/signup.jpeg';

const SignUp = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-richblack-900">
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          <h1 className="text-5xl font-bold leading-[2.375rem] text-richblack-25 mb-3">Welcome</h1>
          <p className="text-[#4ee0f4] text-base italic mb-6">Please Sign Up to continue</p>
          <SignupForm />
        </div>

        {/* Image and Frame Section */}
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
            alt="Students"
            loading="lazy"
            className="relative w-full h-auto z-20 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
