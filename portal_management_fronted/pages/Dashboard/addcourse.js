import React, { useState } from "react";

import axios from "axios";

import { useRouter } from "next/router";
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic'
import Header2 from "../Layout/header2";

import Link from "next/link";

const Layout = dynamic(() => import('../Layout/layout'), {
    ssr: false,
  })
  const Title = dynamic(() => import('../Layout/title'), {
    ssr: false,
  })

export default function Register() {

  const router = useRouter();

 

  const [register, setRegister] = useState({

    
    cname:"",

    time: "",

    student: "",


  });

  const [errors, setErrors] = useState({
    

    cname:"",

    time: "",

    student: "",

  });

 

  const handleChange = (e) => {

    if (e.target.name === "myfile") {

      setRegister({

        ...register,

        [e.target.name]: e.target.files[0],

      });

    } else {

      setRegister({

        ...register,

        [e.target.name]: e.target.value,

      });

    }

  };

 

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};

 

    // if (!register.cid) {

    //   newErrors.cid = "Course is required";

    // }

    if (!register.cname) {

        newErrors.cname = "Name is required";

      }

    if (!register.time) {

      newErrors.time = "Proper Timing is required";

    }

   
      if (!register.student) {

        newErrors.student = "Student Id is required";

      }

   
    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors);

      return;

    }

    try {

      const response = await axios.post(

        "http://localhost:3000/student/addcourse",

        {

          cname: register.cname,

         time: register.time,

          
          student: register.student,

          //image: register.image,

        },

        // {

        //   headers: {

        //     "Content-Type": "multipart/form-data",

        //   },

        // }

      );

      if (response.data) {

        setRegister({

            cname: "",

           time: "",

            
            student:"",  

 

        });

        console.log("Form submitted successfully");

        //router.push("/Hr/login");

      }

    } catch (error) {

      console.log(error);

    }

  };

 

  return (

   

    <div>

      <h1 className="w-full max-w-lg container mx-auto mt-10 text-4xl text-blue-400 ml-[700px] ">Register Here</h1>

      <form

        method="post"

        onSubmit={handleSubmit}

        className="w-full max-w-lg container mx-auto my-5"

      >

        <div className="flex flex-wrap -mx-3 mb-4">

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">

            Course Name

          </label>

          <input

            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"

            type="text"

            name="cname"

            value={register.cname}

            onChange={handleChange}

          />

          {errors.cname && <p className="text-red-500">{errors.cname}</p>}

          <br />

        </div>

        <div className="flex flex-wrap -mx-3 mb-4">

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">

            Timing

          </label>

          <input

            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"

            type="text"

            name="time"

            value={register.time}

            onChange={handleChange}

          />

          {errors.time && <p className="text-red-500">{errors.time}</p>}

          <br />

        </div>


        <div className="flex flex-wrap -mx-3 mb-4">

          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">

            Student id

          </label>

          <input

            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"

            type="text"

            name="student"

            value={register.student}

            onChange={handleChange}

          />

           {errors.student && <p className="text-red-500">{errors.student}</p>}

          <br />

          </div>

 

        <button className=" btn bg-cyan-300 hover:bg-cyan-500  " type="submit">

          Submit

        </button>

      </form>

    </div>

  );

}