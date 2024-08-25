import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
            <NavLink to="/">
                <div className="flex flex-row items-center rounded-md shadow-lg mix-blend-screen">
                    {/*Add Logo*/}
                </div>
            </NavLink>
            <div className='flex gap-x-5 items-center'>
                <NavLink to="/">
                    <p className="">
                        Home
                    </p>
                </NavLink>
                <NavLink to="/about">
                    <p className="">
                        About
                    </p>
                </NavLink>
                <NavLink to="/contact">
                    <p className="">
                        Contact
                    </p>
                </NavLink>
            </div>
            
            <div className='flex gap-x-4 items-center'>
                {
                    token === null && (
                        <NavLink to="/login">
                            <button className='border border-richblack-700 bg-richblack-800 hover:bg-[#1414140b] px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Log in
                            </button>
                        </NavLink>
                    )
                }
                {
                    token === null && (
                        <NavLink to="/signup">
                            <button  className='border border-richblack-700 bg-richblack-800 hover:bg-[#1414140b] px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Sign Up
                            </button>
                        </NavLink>
                    )
                }
                {
                    token !== null && (
                        <NavLink to="/dashboard">
                            <CgProfile className={`${ matchRoute("/dashboard") ? "text-yellow-25" : "text-richblack-25"} text-richblack-25 h-24 w-6 font-bold`}/>
                        </NavLink>
                    )
                }
                {
                    token !== null && (
                        <NavLink to="/">
                            <button onClick={() => {dispatch(logout(navigate))}}
                                    className='border border-richblack-500 bg-richblack-700 hover:bg-[#1414140b] px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                Log out
                            </button>
                        </NavLink>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar