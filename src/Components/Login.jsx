import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black/75 my-36 mx-auto right-0 left-0 text-white rounded-md">
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="email" name="email" id="email" className="p-4 my-4 w-full bg-[#333] rounded-md" placeholder='Email or phone number' />
        <input
          type="password"
          name="password"
          id="password"
          className="p-4 my-4 w-full bg-[#333] rounded-md"
          placeholder='Password'
        />
        <button className="p-4 my-6 bg-[#e50914] w-full rounded-md">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
