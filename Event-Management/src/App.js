import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import Header from './components/shared/Header/Header';
import Profile from './components/Profile/Profile';
import { createProfile } from './FirebaseMethods';
import ViewEvent from './components/ViewEvent/ViewEvent';
import AddCerti from './components/AddCerti/AddCerti';
import AddEvent from './components/AddEvent/AddEvent';
import Contact from './components/Contact/contact';
import About from './components/About/About';
function App() {
  const [user,setUser] = useState('')

  useEffect(()=>{
    var data = localStorage.getItem('userKey')
    if(data!=null){
      
      setUser(data)
      
    }
  },[])

  const procceed = (pData) => {
    if(createProfile(pData)){
      // window.location.href = '/home';
    }
  } 
  return (
    <div className="App">
       
        <BrowserRouter>
          <Routes>
          <Route path="/contact" element={<><Header /><Contact/></>} />
          <Route path="/about" element={<><Header /><About/></>} />
              <Route path='/' element={<Login  userType='Student'/>} />
              <Route path='/admin' element={<Login userType='Admin'/>} />
              <Route path='/faculty' element={<Login userType='Faculty'/>} />
              <Route path='/register' element={<Registration userType='Student' />} />
              <Route path='/requestFacultyRegister' element={<Registration userType='Faculty'/>} />
              <Route path='/home' element={<><Header /><Home userData={user} /></>} />
              <Route path='/createProfile' element={<><Profile onClickHandle={procceed} btnText='Proceed' textValue='Create Your Profile'/></>} />
              <Route path='/events' element={
                <>
                  <Header />
                  <ViewEvent />
                </>
              } />
              <Route path='/addEvent' element={
              <>
                <Header />
                <AddEvent />
                <Contact/>
              </>
              
              } />

             
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
