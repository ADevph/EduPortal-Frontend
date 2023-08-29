

import React, { useState } from "react";

import axios from "axios";

import { useRouter } from "next/router";

import Header from "./Layout/header";

import Footer from "./Layout/footer";

import Navigator from './Layout/navigator';

import Layout from './Layout/layout';

 

export default function Login() {

 

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

 

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post("http://localhost:3000/student/signin", {

        email,

        password,

      });

      if(response.data){

 

      sessionStorage.setItem("email", email);

      console.log("Login successful");

      console.log(response);

     router.push("/dashboard");

    }

    else{

      router.push("/404");

    }

   

    } catch (error) {

      console.log(error);

    }

   

 

  };

 

  return (

    <Layout pages="Log in">

        <title>Login page</title>

        <div><Header></Header></div>

        <div><Navigator></Navigator></div>

    <div>

      <form onSubmit={handleSubmit}>

        <label>Email</label>

        <input

          type="email"

          name="email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

        <br />

 

        <label>Password</label>

        <input

          type="password"

          name="password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

        <br />

 

        <button type="submit">Login</button>

      </form>

    </div>

    <div><Footer></Footer></div>

    </Layout>

  );

}