// src/pages/Register.jsx
import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { Form, useActionData, useNavigation } from 'react-router';
import { AuthInfo } from '../../Components/Authentification/AuthInfo';
import { MdOutlineLock } from 'react-icons/md';

export function Register() {
    const error = useActionData();
    const navigation = useNavigation();

    return (
        <div className="flex flex-row w-[100%] items-center justify-center overflow-hidden ">
              {/* Left Side - Auth Info */}
              <AuthInfo />
        
              <div className="flex flex-col items-center justify-center gap-2.5 w-[50%]">
                <div className="w-sm[90%] flex flex-col items-center justify-center w-[438px] pl-15">
                  {/* Form */}
                  <Form method="post" className="flex flex-col  gap-[35px] w-[430px]">
                    {/* Header */}
                    <div className="flex flex-col gap-[5px] ">
                      <h1 className="text-[#FFFFFF] font-semibold text-[32px]">
                        Welcome Back
                      </h1>
                      <p className="text-[#FFFFFF9E] text-[23px] font-medium">
                        Sign in to your account
                      </p>
                    </div>
        
                    <div>
                      {/* Input Fields */}
                      <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[10px] relative">
                          <label className="text-[#FFFFFFCC] text-[18px] font-semibold">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            className="border h-[54px] text-[18px] font-medium rounded outline-0 border-[#FFFFFF80] border-1 focus:border-[#FCA311] focus:outline-[#FCA311] focus:outline-2 focus:invalid:border-[#EC0B43] focus:invalid:outline-[#EC0B43] rounded-[30px] pl-13 pr-7 peer invalid:border-[#EC0B43] peer-invalid:outline-[#EC0B43] peer"
                          />
                          <div className="absolute bottom-[18px] left-5 text-[#FFFFFF80] peer-focus:text-[#FCA311] peer-invalid:text-[#EC0B43]">
                            <IoMdMail size={20} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[10px] relative">
                          <label className="text-[#FFFFFFCC] text-[18px] font-semibold">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            className="border h-[54px] rounded outline-0 border-[#FFFFFF80] border-1 focus:border-[#FCA311] focus:outline-[#FCA311] focus:outline-2 focus:invalid:border-[#EC0B43] focus:invalid:outline-[#EC0B43] rounded-[30px] pl-13 pr-7 peer"
                          />
                          <div className="absolute bottom-[18px] left-5 text-[#FFFFFF80] peer-focus:text-[#FCA311] peer-invalid:text-[#EC0B43]">
                            <MdOutlineLock size={24} />
                          </div>
                        </div>
                      </div>
        
                      {/* Remember Me */}
                      <div className="flex justify-between items-center mt-[18px]">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="w-4 h-4 accent-[#FCA311] border-[#FFFFFF80] rounded checked:text-red-500"
                          />
                          <label
                            htmlFor="remember"
                            className="text-[#FFFFFFCC] text-[16px] font-semibold"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="/forgot-password"
                          style={{ color: '#FCA311' }}
                          className="text-[16px] font-semibold"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
        
                    <input type="text" name="address" placeholder="Address" required />
                    <input type="text" name="phone" placeholder="Phone" required />

                    <input type="email" name="email" placeholder="Email" required />
                    <input type="text" name="lastname" placeholder="Lastname" required />
                    <input type="text" name="surname" placeholder="Surname" required />
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={navigation.state === 'submitting'}
                      className="no-hover border-0 text-[#FFFFFF] font-semibold text-[18px] h-[54px] rounded-[33px] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: '#FCA311', borderRadius: '30px' }}
                    >
                      {navigation.state === 'submitting' ? 'Connecting...' : 'Sign In'}
                    </button>
                  </Form>
        
                  
        
                  {/* Sign Up Link */}
                  <p className="text-[#FFFFFF80] mt-5 text-center text-[16px] font-semibold">
                    Don't have an account?{' '}
                    <a href="/register" style={{ color: '#FCA311' }}>
                      Sign Up
                    </a>
                  </p>
                  {/* Error Message */}
                  {error && (
                    <p style={{ color: '#EC0B43' }} className="text-center mt-5">
                      {error.message}
                    </p>
                  )}
                </div>
            </div>
            <div></div>
            </div>
    );
}