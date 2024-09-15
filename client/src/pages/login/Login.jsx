import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [inputs, setInputs] = useState({
        userName: "",
        password: ""
    })
    const {loading, login} = useLogin();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(inputs);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className="h-full w-full p-6 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            value={inputs.userName}
                            onChange={(e)=>setInputs({...inputs, userName: e.target.value})}
                        />

                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e)=>setInputs({...inputs, password: e.target.value})}
                        />
                    </div>
                    <div className='text-center'>
                        <button  className='btn text-black  hover:text-white btn-block glass mt-5'
                        disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span>: "Log In"}</button>
                    </div>
                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Don't have an account?</Link>
                </form>
            </div>
        </div>
    )
}

export default Login