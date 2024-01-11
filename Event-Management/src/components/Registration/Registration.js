import React,{useRef} from 'react'
import './Registration.css'
import InputField from '../shared/InputField/InputField'
import {useNavigate} from 'react-router-dom';
import { register, addFacultyRequest, verifyEmail } from '../../FirebaseMethods';

const Registration = (props) => {
  
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const cpassRef = useRef(null);
    // const [registerState,setRegisterState] = useState({
    //     'email': '',
    //     'password': '',
    //     'cPassword':'',
    // })
    const goToSignIn = () => {
        navigate('/')
    }

    const onEmailChangeField = () => {
      //console.log( 'Email: '+emailRef.current.value);
    }

    const onPassChangeField = () => {
     // console.log('Password: '+passRef.current.value);
    }

    const onCPassChangeField = () => {
     // console.log('Confirm Password: '+cpassRef.current.value);
      console.log(passRef.current.value===cpassRef.current.value);
    }
   
    const registerUser = async(e) => {
        e.preventDefault()
        if(passRef.current.value===cpassRef.current.value){
          
          try{
            const data = await register({
            'email' : emailRef.current.value,
            'password': passRef.current.value
            })

            const sendVerifi = await verifyEmail(emailRef.current.value)
            console.log('====>'+ sendVerifi);

          alert('User Registered Successfully\n Email is send for Verification')
          if(props.userType==='Faculty'){
            addFacultyRequest(emailRef.current.value)
           goToFacultySignIn()
          }
          else if(props.userType==='Student'){
             goToSignIn();
          }
         
          console.log(data);
        }catch(error){
        alert(error.message)
        console.log(error);
        }
         
        }
        else{
          alert('Please Write both Password Same');
        }
    }
    const goToFacultySignIn = ()=>{
      navigate('/faculty')
    }
  return (
<div className='register-body'>

        
{/* <div id='logoside'>
  EMS          
</div>  */}

{/* <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
</div> */}

<form onSubmit={registerUser} className='register-form'>

<h3> 
{(props.userType==='Faculty')?'Request Register'
:'Register'}
</h3>

<br />
<br />
<InputField id='email' fRef={emailRef} onChangeField={onEmailChangeField} cutWidth={50} type='email' label='Email' />
<br />
<br /> 
 
<InputField id='passwd'  fRef={passRef}  onChangeField={onPassChangeField} cutWidth={76} type='password'  label='Password' /> 
<br />
<br /> 
 
<InputField id='Cpasswd' fRef={cpassRef} onChangeField={onCPassChangeField} cutWidth={128} type='password'  label='Confirm Password' /> 

  <button className='register-btn'   style={{marginBottom:40}}>Create Account</button>
    {props.userType==='Student'?
  <label className='lb-bottom'>Already Have an account - <span onClick={goToSignIn} >Sign In</span></label>
    :
    props.userType==='Faculty'?
    <label className='lb-bottom'>Already Have an account - <span onClick={goToFacultySignIn} >Sign In</span></label>
    :
    <span></span>
    }
</form>
</div>
  )
}

export default Registration
