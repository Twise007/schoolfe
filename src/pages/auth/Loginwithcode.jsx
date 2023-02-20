import React, { useState } from 'react'
import { RiShieldKeyholeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

const initialState = {
    loginCode: "",
  };


const Loginwithcode = () => {
    const [formData, setFormData] = useState(initialState);
    const { loginCode } = formData;  
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    };


const LoginWithCode = () => {};
  return (
    <div className="hero min-h-screen bg-bg-off-white">
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">                
                <div className="card-body">
                    <div className="card-actions justify-center">
                        <RiShieldKeyholeFill size={50} className="text-bg-black" /> 
                    </div>
                    <div className="card-actions justify-center">                 
                        <h1 style={{fontSize:"30px", fontWeight:"500"}} className='text-bg-purple'>Enter Access Code</h1> 
                    </div>
                    <form onSubmit={LoginWithCode}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-bg-black">Email</span>
                    </label>
                    <input type="text" placeholder="access code" required name='loginCode' value={loginCode} onChange={handleInputChange} className="input input-bordered bg-bg-white text-bg-black" />
                    </div>
                    <Button>proceed to login</Button>
                    <span className='label-text-alt text-bg-black m-5 bg-bg-white p-1'>Check your email for login access code</span>
                    </form>
                    <Link to="/" className="label-text-alt link link-hover mb-3 text-bg-black mt-5">Home</Link>
                    <button className='text-bg-black hover:text-bg-purple p-1 py-2 mx-16 shadow-2xl bg-bg-white rounded-box'>Resend Code</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginwithcode