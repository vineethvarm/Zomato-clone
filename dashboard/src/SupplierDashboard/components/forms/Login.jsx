import React from 'react'

const Login = () => {
  return (
    <div className='m-auto'>
        <form className='loginform'>
    <div className="mb-3">
       <h3 className='text-center'>Log In</h3>
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">Enter Your Email Id</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="PasswordHelp"/>
      <div id="PasswordHelp" className="form-text"> Enter Your Password</div>
    </div>
    <div className="text-center">
    <button type="submit" className="btn btn-primary" >Submit</button>
    </div>
       </form>
  </div>
  )
}

export default Login
