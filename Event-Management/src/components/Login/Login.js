import React,{useRef} from 'react'
import InputField from '../shared/InputField/InputField';
import './Login.css'
import { isFaculty, login, sendResetEmail} from '../../FirebaseMethods';
import {useNavigate} from 'react-router-dom';
// import { Link, useNavigate } from "react-router-dom";
import { isAdmin } from '../../FirebaseMethods';


const Login = (props) => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  
const goToSignUp = () => {
  navigate('/register')
}


const loginUser = async(e) => {
  e.preventDefault()
    
    try{
      const data = await login({
      'email' : emailRef.current.value,
      'password': passRef.current.value
    })

    console.log(data);

    if(data.emailVerified){
      alert('User Login Successfully')
       localStorage.setItem('userKey', JSON.stringify(data));
       if(props.userType==='Admin'){
        if(isAdmin(data.email)){
            navigate('/home');
        }
        else{
          alert('User is not a admin')
        }
      }
      else if(props.userType==='Faculty'){
        console.log('faculty data');
          const facultyData = await isFaculty(data.email);
          console.log(facultyData);
      }
      else if(props.userType==='Student'){
        navigate('/home')
      }
      
      // navigate('/home');
    }
    else{
      alert('Please Verify Email to Login into account')
    }
  }catch(error){
  alert(error.message)
    
  }
   
} 

const forgotPassword = async() => {
  try{
 
       await sendResetEmail(emailRef.current.value);
     
      alert('Email Send for Password RESET')
  }
  catch(error){
      alert(error.message);
      console.log(error);
  }
}
const goToFacultySignUp = () => {
  navigate('/requestFacultyRegister')
}
  return (
    <div className='login-body'>

        <form onSubmit={loginUser} className='login-form'>
          
          <h3>{props.userType} Login</h3>

          <br />
          <br />
          <InputField id='email' fRef={emailRef} cutWidth={50}  type='email' label='Email' />
          <br />
          <br /> 
           
          <InputField id='passwd' fRef={passRef} cutWidth={76} type='password'  label='Password' /> 

            <button className=' login-btn' onClick={loginUser} style={{marginBottom:40}}>Log In</button>
            
            <div className="social">
              <div className="go" onClick={forgotPassword} style={{paddingTop:10}}><i className="fa-regular fa-envelope"></i> Forgot Password </div>
            </div>
          { props.userType=== 'Student'?
            <label className='lb-login-bottom'>Create an account - <span onClick={goToSignUp} >Sign Up</span></label>
          : props.userType==='Faculty'?
            <label className='lb-login-bottom'>Request an account - <span onClick={goToFacultySignUp} >Sign Up</span></label>
          :<span></span>
          }
        </form>
        
    </div>
  
  )

}

export default Login
