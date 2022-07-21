import React, { useState } from "react"
import {Link,  useNavigate} from "react-router-dom";
import { auth } from "../../firebase";
import'./Login.css'
const Login = () => {
    const history = useNavigate();

        const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))

    }



return(
      <div className='login'> 
         <div className="login__page">

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
               <Link to="/register" style={{textDecoration: "none"}} >
                <button className='login__registerButton'>Create BeatShop Account</button>
               </Link>
            </div>
            </div>
        </div>
)
}
export default Login