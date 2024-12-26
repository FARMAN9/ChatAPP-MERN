import React, { useState } from 'react'
import chat from '../assets/chat_logo.svg'
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import axios, {isCancel, AxiosError} from 'axios';
import { useAuth} from '../contex/authprovider';
import { Link, Navigate } from 'react-router-dom';

function Login() {
    const [authUser, setAuthUser] = useAuth();
    
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    const userdata={
        email:data.email,
        password:data.password,
    }
    await axios.post("api/user/login",userdata).then(res=>{
        if(res.data)
        {
            setAlert({
                type: 'success',
                message: res.data.message
            });
            setTimeout(() => {
                setAlert(null);
            }, 3000);
        }
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
  
    

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 backdrop-blur-sm ">
     
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <div className="flex flex-col-2 items-center justify-center">
          <img src={chat} alt="" className="w-20 h-20 rounded-full mb-4" />
          <h1 className="text-4xl font-bold mb-4 mt-4 text-center text-green-500">Chat App</h1>
        </div>
        <form
          className="flex flex-col w-full border-4 border-smoke-200 border-opacity-50 p-4 rounded-md mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <label className="mb-2 flex items-center" htmlFor="email">
            <FaEnvelope className="mr-2" />
            Email
          </label>
          {errors.email && (
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
          {errors.password && (
            <div className="text-red-500 text-sm font-bold mt-2">
              This field is required
            </div>
          )}
          <div className="relative">
            <input
              className="p-2 mb-4 border rounded-md w-full"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              {...register('password', { required: true })}
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
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-green-500 hover:text-green-700">
              Signup
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
  );
}

export default Login;