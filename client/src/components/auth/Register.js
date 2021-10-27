import React, {useState} from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    const {username, email, password, password2} = formData;

    const onChange = e => {
        // onChange, overwrite to existing data
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Passwords do not match.");
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            };

            fetch('/api/register', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        }
    }

    return (
        <form className="form" onSubmit={e=>onSubmit(e)}>
            <div className="form-group mb-2">
                <input type="email" 
                name="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={e=>onChange(e)}/>
            </div>
            <div className="form-group mb-2">
                <input type="text" 
                name="username" 
                className="form-control" 
                id="inputUsername" 
                placeholder="Pick a username" 
                value={username}
                onChange={e=>onChange(e)}/>
            </div>
            <div className="form-group mb-2">
                <input type="password" 
                name="password" 
                className="form-control" 
                id="inputPassword1" 
                placeholder="Enter a password" 
                minLength='6'
                value={password}
                onChange={e=>onChange(e)}/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                name="password2" 
                className="form-control" 
                id="inputPassword2" 
                placeholder="Enter a password" 
                minLength='6'
                value={password2}
                onChange={e=>onChange(e)}/>
            </div>

            <button type="submit" className="form-group btn btn-primary">Login</button>
        </form>
    )
}

export default Register
