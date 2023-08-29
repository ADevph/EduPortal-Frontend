import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic'
import Footer from '../Layout/footer';
import Header2 from '../Layout/header2';

const Layout = dynamic(() => import('../Layout/layout'), {
    ssr: false,
  })
  const Title = dynamic(() => import('../Layout/title'), {
    ssr: false,
  })

const UpdateStudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedStudentData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.put('/student/updatestudent/5', updatedStudentData);
      console.log(response.data); // This could be a success message or updated student data
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (

    <>
    <Header2 />
   
  
    <form onSubmit={handleSubmit}>
        <div className='text-center'>

       
      <div className='mt-4'>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
     <br />
     <br />
      
      <div>
        <label>Email: </label>
        
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <br />
      <br />
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <br />
      <br />

      </div>
      <div className=' text-center border-4 rounded-lg text-blue-400'>
 <button type="submit"> Update Student</button>
      </div>
     
    </form>

    </>
  );
};

export default UpdateStudentForm;
