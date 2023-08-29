
import { useState, useEffect } from 'react';
import Layout from "./Layout/layout";
import Title from "./Layout/title";
import axios from 'axios';

export default function RegisterPage () {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');



  
  useEffect(() => {
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
    setFile(null);
    setError('');
  }, []);


  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };


  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword || !phone || !file) {
      console.log(fullName, email, password, confirmPassword, phone, file);
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
     
    try {
      postData()
      setError("user created successfully");
    } catch (e) {
      setError(e);
    }
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setPhone('');
      setFile(null);
      setError('');
    }
  };

  async function postData() {
   try {
     const formData = new FormData();
     formData.append('name', fullName);
     formData.append('email', email);
     formData.append('password', password);
     formData.append('phone', phone);
     formData.append('image', document.querySelector('#myfile').files[0]);
    console.log(formData);
     const response = await axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT + '/student/signup/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
     });
    

     const data = response.data;
     console.log(data);
     } catch (error) {
     console.error(error);
     }
    }

  return (
    <>
     <Title page="Registration"> </Title>
<Layout>

  <div className='ml-4'>


 
      <h1 className='text-3xl'>Registration Form</h1>
      <form className='mt-8' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className=''>Full Name</label>
          <input type="text" name="fullName" value={fullName} onChange={handleChangeFullName} />
        </div>
        <div className='mb-4'>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div className='mb-4'>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </div>
        <div className='mb-4'>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} />
        </div>
        <div className='mb-4'>
          <label>Phone</label>
          <input type="number" name="phone" value={phone} onChange={handleChangePhone} />

        </div>
        


        <div className='mb-4'>
          <label>Upload File</label>
          <input type="file" name="myfile" id="myfile" onChange={handleChangeFile} />
        </div>
        {error && <p>{error}</p>}
        <button className='border-8 rounded-lg hover:bg-cyan-500' type="submit">Register</button>
      </form>

      <div className="mt-[240px]">
          <footer> </footer>{" "}
        </div>
    

        </div>
      </Layout>
    </>
  );
};

