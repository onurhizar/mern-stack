import React from 'react'

const Register = () => {
    return (
        <form action="http://localhost:5000/api/register" method="post" className="text-center">
            <div class="form-group mb-2">
                <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div class="form-group mb-2">
                <input type="text" name="username" class="form-control" id="inputUsername" placeholder="Pick a username" />
            </div>
            <div class="form-group mb-3">
                <input type="password" name="password" class="form-control" id="inputPassword1" placeholder="Enter a password" />
            </div>
            <button type="submit" class="form-group btn btn-primary">Login</button>
        </form>
    )
}

export default Register
