import React,{useState} from "react"
import {Link} from "react-router-dom"
import './Register.css';


export const Register = (props) => {
    const [name,setName] = useState('');
    const [contact,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(contact);
        console.log(email);
        console.log(pass);
       


    }


    return (
        <div className="flex-container">
            <div className='bg'></div>
            
            <div className="auth-form">
            

            <form className="reg-form"  onSubmit={handleSubmit} >
                
            
                <h1 className="title ">Welcome to Soch</h1>
                <h3 className="tagline">Please Register to turn your Imagination to Animation</h3>


                <label htmlfor="Name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="Name" placeholder="Enter your Name " id="name" name="name"/>



                <label htmlfor="contact">Contact</label>
                <input value={contact} onChange={(e) => setPhone(e.target.value)}type="contact" placeholder="Contact" id="contact" name="contact"/>



                <label htmlfor="email">email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>


                <label htmlfor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="Password" id="password" name="password"/>


                <Link className="link-but" to="/">Register</Link>

                {/* <button type="submit" className="link-but">Register</button> */}
                

            </form>

            <div>
            <br></br>
                <Link className="login-link" to="/login" >Already Registered? Login</Link>

            </div>

            
            
            
        </div>

    </div>
        
        
        
    )

}

export default Register;