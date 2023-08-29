import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth } from "./utils/authcontext";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("./Layout/layout"), {
  ssr: false,
});
const Title = dynamic(() => import("./Layout/title"), {
  ssr: false,
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  //refresh
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
    } else if (!isValidEmail(email)) {
      setError("Invalid email address");
    } else {
      const res = await doSignIn(email, password);
      console.log(res);
    }
  };
  async function doSignIn(email, password) {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_ENDPOINT + "/student/signin/",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      if (response.data == true) {
        console.log("cookie: " + document.cookie);
        login(email, document.cookie);
        router.push("/Dashboard/profile");
      } else {
        setError("Invalid user");
      }

      console.log("response: " + response);

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <Title page="Login"> </Title>
      <Layout>
        <div class="flex justify-center items-center bg-cyan-400 mt-24">
          <div class="flex-auto bg-teal-800 p-4">
            <p class="text-3xl font-bold text-white text-center">Login</p>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="justify-center items-center mt-4 ml-[500px]">
                  <label className="text-white text-2xl ">Email: </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="input input-bordered w-full max-w-xs"
                    onChange={handleChangeEmail}
                  />
                </div>
                <br />
                <div className="justify-center items-center mt-4 ml-[120px]">
                  <label className="text-2xl text-white ml-[340px]">
                    {" "}
                    Password:{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="input input-bordered w-full max-w-xs"
                    onChange={handleChangePassword}
                  />
                </div>
                {error && <p>{error}</p>}
                <div className="p-4 ml-[120px]">
                  <button
                    className="btn btn-primary hover:bg-blue-400 text-white ml-[550px]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-[195px]">
          <footer> </footer>{" "}
        </div>
      </Layout>
    </>
  );
}
