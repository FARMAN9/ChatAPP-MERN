import React, { useState } from 'react'
import chat from '../assets/chat_logo.svg'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axios, {isCancel, AxiosError} from 'axios';
import { useAuth} from '../contex/authprovider';
import { Link, Navigate } from 'react-router-dom';

function Signup() {
    const [authUser, setAuthUser] = useAuth();
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async(data) => {
        console.log(data);
        const userdata={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
            confirm_password:data.confirm_password
        }
        await axios.post("api/user/signup",userdata).then(res=>{
            if(res.data)
                setAlert({
                    type: 'success',
                    message: res.data.message
                });
                toast.success(res.data.message);
                setTimeout(() => {
                    setAlert(null);
                }, 3000);
            localStorage.setItem("chatapp",JSON.stringify(res.data));
            setAuthUser(res.data);

            
        }).catch(err=>{
            if(err.response){
                setAlert({
                    type: 'error',
                    message: err.response.data.error
                });
                
                setTimeout(() => {
                    setAlert(null);
                }, 3000);
            }
        });


      };

     const password = watch('password','');


     const validatePassword = (value) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
          return "Password must contain at least one lowercase letter";
        }
        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }
        if (!/[!@#$%^&*]/.test(value)) {
          return "Password must contain at least one special character (!@#$%^&*)";
        }
        if (/\s/.test(value)) {
          return "Password should not contain spaces";
        }
        
        return true;
      };
      const validatepasswordmatch = (value) => {
        return value === password ||  "Passwords do not match"
      };

      const [showPassword, setShowPassword] = useState(false);
      const handleClick = () => setShowPassword(!showPassword);

  const [alert, setAlert] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 backdrop-blur-sm dark:text-white">
       

        <div className='flex flex-col items-center justify-center w-full max-w-md'>
            <div className="flex flex-col-2 items-center justify-center">
            <img src={chat} alt="" 
            className="w-20 h-20 rounded-full mb-4"
            />
      <h1 className="text-4xl font-bold mb-4 mt-4 text-center text-green-500">Chat App</h1>
            </div>
      <form className="flex flex-col w-full border-4 border-smoke-200 border-opacity-50 p-4 rounded-md mb-4"
       onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <label className="mb-2 flex items-center" htmlFor="name">
          <FaUser className="mr-2" />
          FullName
        </label>
        {errors.fullname?.type === 'required' && (
  <div className="text-red-500 text-sm font-bold mt-2">
    This field is required
  </div>
)}
        <input
          className="p-2 mb-4 border rounded-md"
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Enter your FullName"
          {...register('fullname', { required: true })}
        />


        <label className="mb-2 flex items-center" htmlFor="email">
          <FaEnvelope className="mr-2" />
          Email
        </label>
        {errors.email?.type === 'required' && (
  <div className="text-red-500 text-sm font-bold mt-2">
    This field is required
  </div>
)}
        <input
          className="p-2 mb-4 border rounded-md"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          {...register('email', { required: true })}
        />


        <label className="mb-2 flex items-center" htmlFor="password">
          <FaLock className="mr-2" />
          Password
        </label>
        {errors.password?.type === 'required' ? (
  <div className="text-red-500 text-sm font-bold mt-2">
    This field is required
  </div>
) : errors.password?.type === 'validate' ? (
  <div className="text-red-500 text-sm font-bold mt-2">
    {errors.password?.message}
  </div>
) : null}
        <div className="relative">
        <input
          className="p-2 mb-4 border rounded-md w-full"
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Enter your password"
          {...register('password', { required: true ,validate:validatePassword})}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          type="button"
          onClick={handleClick}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        </div>
        <label className="mb-2 flex items-center" htmlFor="confirm_password">
          <FaLock className="mr-2" />
          Confirm Password
        </label>
        {errors.confirm_password?.type === 'required' ? (
  <div className="text-red-500 text-sm font-bold mt-2">
    This field is required
  </div>
) : errors.confirm_password?.type === 'validate'  ? (
  <div className="text-red-500 text-sm font-bold mt-2">
    {errors.confirm_password.message}
  </div>
) : null}
        <div className="relative">
        <input
          className="p-2 mb-4 border rounded-md w-full"
          type={showPassword ? "text" : "password"}
          id="confirm_password"
          name="confirm_password"
          placeholder="Enter your password again"
          {...register('confirm_password', { required: true ,validate:validatepasswordmatch })}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          type="button"
          onClick={handleClick}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          type="submit"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account? 
          <Link to="/login" className="text-green-500 hover:text-green-700">
            Login
          </Link>
        </p>
        <p>
          {alert && (
        <div className={`alert ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-center text-white p-4 rounded-md mb-4`}>
          {alert.message}
        </div>
      )}
          </p>
      </form>
      </div>
    </div>
  )
}

export default Signup