import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
import './Register.css'

const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Register =()=>{


   
    const [email,setEmail]=useState();
    const [validEmail, setValidEmail]=useState(false)
 
    const [firstName,setFirstName]=useState();
    const [validFirstName, setValidFirstName]=useState(false)

    const [lastName,setLastName]=useState();
     const [validLastName, setValidLastName]=useState(false)

    const [password,setPassword]=useState();
    const[validPwd,setValidPwd]=useState(false);
;

  const [matchPassword,setMatchPassword]=useState();
  const [validMatch,setValidMatch]=useState(false);


   useEffect(()=>{
    const result = EMAIL_REGEX.test(email)
      setValidEmail(result);
   },[email])

   useEffect(()=>{
    const result = PWD_REGEX.test(password)
    setValidPwd(result);
   },[password])

   useEffect(()=>{
     const result= password===matchPassword;
     setValidMatch(result)
   },[password,matchPassword])



    
    const history = useNavigate();
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if( auth&&validEmail===false&&validMatch===false&&validFirstName===false&&validLastName===false ){
              history.push('/login')
            }
        })
        .catch(error => alert(error.message))
    }

    return(
 <div className='register'> 
         <div className="login__page">

            <div className='login__container'>
                <h1>Register</h1>

                <form>
                    <h5>E-mail</h5>
                    <small className={validEmail ? "hide": "valid"}>Something gone wrong</small>
                    <input className="register__input"  type='text' value={email} onChange={e => setEmail(e.target.value)} />
                   
                    <h5>First Name</h5>
                   
                    <input className="register__input" type="text" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
                    
                    <h5>Last Name</h5>
                   
                   
                    <input className="register__input" type="text" value={lastName} onChange={e=> setLastName(e.target.value)}/>

                    
                    <h5>Password</h5>
                                <small className={validPwd ? "hide": "valid"}>Something gone wrong</small>
                    <input className="register__input" type='password' value={password} onChange={e => setPassword(e.target.value)} />
                     

                    <h5>Confirm Password</h5>
                                <small className={validMatch ? "hide": "valid"}>Something gone wrong</small>
                    <input className="register__input" type='password' value={matchPassword} onChange={e => setMatchPassword(e.target.value)} />
                     
  <p className="text__agree">
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


           <button className='login__registerButton' onClick={register}>Register</button>                </form>

              

     
            </div>
            </div>
        </div>




    )

    
}
export default Register