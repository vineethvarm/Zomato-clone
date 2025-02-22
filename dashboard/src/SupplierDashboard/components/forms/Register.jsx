import React from 'react'

const Register = () => {
  return (
    <div className='m-auto'>
     <form className='registerform'>
    <h3 className='text-center'>Sign Up</h3>
    <div className="mb-3">
      <label for="exampleInputUsername1" className="form-label">Username</label>
      <input type="Username" className="form-control" id="exampleInputUsername1" aria-describedby="UserHelp"/>
      <div id="UsernameHelp" className="form-text"> Enter Username</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">Enter Email Id</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="PasswordHelp"/>
      <div id="PasswordHelp" className="form-text"> Enter Password</div>
    </div>
    <div className="text-center">
    <button type="submit" className="btn btn-primary" >Submit</button>
    </div>
  </form>
  </div>
  )
}

export default Register
