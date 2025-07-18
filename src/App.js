import React from 'react'
import PropTypes from 'prop-types';
import Student from './components/students';

function App() {
  return (
   <>
    
    <Student name = "sponchboob" age ="18" isStudent={true}/>
    <Student name = "patric" age ={44} isStudent={false}/>
    <Student name = "squidward" age ={47} isStudent={false}/>
    <Student name = "Sandy" age ={17} isStudent={true}/>
    <Student name = "Lilly" />

     
   </>
  );
}

export default App
