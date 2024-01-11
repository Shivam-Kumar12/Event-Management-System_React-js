import React, { useRef } from 'react'
import InputField from '../shared/InputField/InputField'
import './Profile.css'
const Profile = (props) => {
  const fNameRef = useRef(null);
  const mNameRef = useRef(null);
  const lNameRef = useRef(null);
  const enRef = useRef(null);
  const dobRef = useRef(null);
  const onClickHandle = () => {
    
    props.onClickHandle({
      'fname' : fNameRef.current.value,
      'mname' : mNameRef.current.value,
      'lname' : lNameRef.current.value,
      'en' : enRef.current.value,
      'dobDate': dobRef.current.value,
    })
   
  }
  
  return (
    <>

        <div className='profile'>
        <h3>{props.textValue}</h3>
            <table className='profileTable'>
              <tbody>
                <tr>
                  <td>
                      <InputField type='text' fRef={fNameRef} label='First Name' cutWidth={80} />
                  </td>
                  <td>
                      <InputField type='text' fRef={lNameRef} label='Last Name' cutWidth={80} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputField type='text' label='Department' cutWidth={83} />
                  </td>
                  <td>
                    <InputField type='text' label='Sem' cutWidth={45} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputField type='text' label='Phone No.' cutWidth={75} />
                  </td>
                  <td>
                    <InputField type='text' label='Gender' cutWidth={60} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                  <InputField type='text' fRef={enRef} label='Enrollment No.' cutWidth={100} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                  <InputField type='date' fRef={dobRef} label='Date of Birth' cutWidth={90} />
                  </td>
                </tr>
                <tr>
                  <td>
                  <br />
                  <br />
                  <br />
                  <div className="container">
                    <div className="center">
                      <button className="btn" onClick={onClickHandle}>
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span>{props.btnText}</span>
                      </button>
                    </div>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            
        
            
            

          
        </div>

        <div>
           
        </div>
    </>
  )
}

export default Profile
