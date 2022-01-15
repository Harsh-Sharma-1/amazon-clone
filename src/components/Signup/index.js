import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import './style.css';


function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = e =>{
        e.preventDefault();

        //firbase register material
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                navigate('/');
            }
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/"><img className= "login-logo"
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
            alt="" /></Link>   

            <div className="login-container">
                <h1>Create account</h1>
                <form>
                    <h5>Your Name</h5>
                    <input type="text" value={name} 
                    onChange={e => setName(e.target.value)}/>
                    <h5>Email</h5>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={e => setPassword(e.target.value)} />
                </form>  
                <p>
                By continuing, you agree to Amazon-clone
                Conditions of Use and Privacy Notice.
                Please read our privacy notice, our terms 
                and conditions.
                </p>  

                <button className="login-signin-btn"
                onClick={register}
                >
                    Continue
                </button>

                <p>Already have a account <span onClick={()=>navigate('/login')} style={{
                    color:"blue",
                    cursor:"pointer"
                }}>Sign-in</span></p>
            </div> 
        </div>
    )
}

export default Signup;
