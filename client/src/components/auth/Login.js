import React, {useState, Fragment} from 'react'
import BasicAlert from '../layout/BasicAlert';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [alert, setAlert] = useState({show:false, type:"primary", text:""}); 
    const {email, password} = formData;

    const onChange = e => {
        // onChange, overwrite to existing data
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const onSubmit = async e => {
        e.preventDefault();
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        fetch('/api/login', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.errors !== undefined){
                let errorMessage = "Error! "+data.errors[0].msg
                setAlert({...alert, show:true, type:"danger",
                    text:errorMessage});
            }
            else if (data.token !== undefined){
                setAlert({...alert, show:true, type:"success",
                    text:"Congratulations!"});
                localStorage.setItem("token", data.token);
            }
        });
    
    }

    return (
        <Fragment>
        {alert.show && <BasicAlert type={alert.type} text={alert.text}/>}
        <form className="text-center" onSubmit={e => onSubmit(e)}>
            <div className="form-group mb-2">
                <input type="email" 
                className="form-control" 
                name="email"
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                value={email}
                onChange={e=>onChange(e)}/>
            </div>
            <div className="form-group mb-3">
                <input type="password" 
                className="form-control" 
                name="password"
                id="exampleInputPassword1" 
                placeholder="Password" 
                value={password}
                onChange={e=>onChange(e)}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        </Fragment>
    )
}

export default Login
