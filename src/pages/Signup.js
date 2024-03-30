import { useState } from "react";
import axios from 'axios'

function Signup() {
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/AntenatalSystemmain',{name,email,password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="bg-white p-3 rounded w-25 shadow p-3 mb-5 bg-body rounded">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" id="name"  placeholder="Enter Name" className="form-control rounded-0" autoComplete="off"  
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" id="email" placeholder="Enter Email" className="form-control rounded-0" autoComplete="off"
                     onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" id="password" placeholder="Enter Password" className="form-control rounded-0" autoComplete="off"
                     onChange={(e) => setPassword(e.target.value)}/>
                </div> 
                <button type="submit" className="btn btn-success w-100 rounded-0">Submit</button>
            </form>
           
          
           
        </div>
        </div>
       
    );
}
export default Signup;

