import React, { useState } from 'react';
import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' +cls)
    if (mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  
  return (
    <Router>
    
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
         <Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter." mode = {mode} />
          </Route>
        </Switch> 
        </div> 
       </Router>
      
  );
}

export default App;
