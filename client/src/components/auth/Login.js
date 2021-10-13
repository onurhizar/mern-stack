import React from 'react'

const Login = () => {
    return (
        <form className="text-center">
            <div class="form-group mb-2">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group mb-3">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    )
}

export default Login
