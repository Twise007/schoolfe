import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Homepic from '../assets/homePic.jpg'
import { BiUserCircle } from 'react-icons/bi'


const Home = () => {
  return (
    <div>
      <Header />
        <div className="hero min-h-screen text-bg-off-white" style={{backgroundImage: `url(${Homepic})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content flex-col lg:flex-row">
            <div className=''>
              <h1 className="text-5xl font-bold">Learning Management System</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
              <div className="card-body">
                <div className="card-actions justify-center">
                  <div className="text-bg-off-white">
                    <BiUserCircle size={45} className="text-bg-white"/>
                    <hi style={{fontSize:"20px"}} className='items-center'>Login</hi>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-bg-white">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered bg-bg-off-white text-bg-black" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-bg-white">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered bg-bg-off-white text-bg-black" />
                  <label className="label">
                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Home