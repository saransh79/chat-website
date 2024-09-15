import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        gender: "",
    })
    const {loading, signup} = useSignup();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(inputs);
    }
    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className="h-full w-full p-6 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Mark Juck'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />

                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='markjuck'
                            className='w-full input input-bordered h-10'
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    {/* gender checkbox component */}
                    <GenderCheckbox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />

                    <div className='text-center'>
                        <button className='btn text-black  hover:text-white btn-block glass mt-2'
                        disabled={loading}>
                            {
                                loading ? <span className='loading loading-spinner'></span> : "Sign Up"
                            }</button>
                    </div>
                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup