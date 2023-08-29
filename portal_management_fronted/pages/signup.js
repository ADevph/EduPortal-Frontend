// // import Link from 'next/link';

// // import React from 'react';


// // // import Header from './layout/Header';
// // // import Footer from './layout/Footer';

// // const SignupPage = () => {

// //   return (

// //     <fieldset>

// // <div><Header></Header></div>
// //       <div>

// //         <h1>Sign Up</h1>

// //         <form>

// //           <label htmlFor="firstname"><b>First Name:</b></label>

// //           <input type="text" id="firstname" name="firstname" placeholder="Please Enter your first name" required /><br /><br />

 

// //           <label htmlFor="lastname"><b>Last Name:</b></label>

// //           <input type="text" id="lastname" name="lastname" placeholder="Please Enter your last name" required /><br /><br />

 

// //           <label htmlFor="email"><b>Email:</b></label>

// //           <input type="email" id="email" name="email" placeholder="Please Enter your email" required /><br /><br />

 

// //           <label htmlFor="password"><b>Password:</b></label>

// //           <input type="password" id="password" name="password" placeholder="Please Enter your password" required /><br /><br />

 

// //           <input type="submit" value="Sign Up" />

// //         </form>

// //         <p>

// //           Already have an account?&nbsp;

// //           <Link href="/login">Log in</Link>

// //         </p>

// //       </div>
// //       <div><Footer></Footer></div>
// //     </fieldset>

// //   );

// // };

 

// // export default SignupPage;



// import React, { useState } from "react";

// import axios from "axios";

// import Header from "./Layout/header";

// import Footer from "./Layout/footer";

// import Navigation from './Layout/navigator';

// import Layout from './Layout/layout';

// import { useRouter } from "next/router";

 

// export default function CreateHr() {

//   const router = useRouter();

//   const [name, setName] = useState("");

 

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   const [image, setImage] = useState(null);

 

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const response = await axios.post("http://localhost:3000/student/signup",

//         {

//           name,

//           email,

//           password,

//           image,

//         },

//         {

//           headers: {

//             "Content-Type": "multipart/form-data",

//           },

//         }

//       );

//       console.log(response)

//       if (response.data) {

//         console.log("Form submitted successfully");

//         router.push("/dashboard");

//       }

//     } catch (error) {

//       console.log(error);

//     }

//   };

 

//   return (

//     <Layout pages="Log in">

//         <title>Login page</title>

//         <div><Header></Header></div>

//         <div><Navigation></Navigation></div>

//     <div>

//       <form

//         method="post"

//         action=""

//         onSubmit={handleSubmit}

//         encType="multipart/form-data"

//       >

//         <label>Name</label>

//         <input

//           type="text"

//           name="name"

//           value={name}

//           onChange={(e) => setName(e.target.value)}

//         />

//         <br />

 

//         <label>Email</label>

//         <input

//           type="email"

//           name="email"

//           value={email}

//           onChange={(e) => setEmail(e.target.value)}

//         />

//         <br />

 

//         <label>Password</label>

//         <input

//           type="password"

//           name="password"

//           value={password}

//           onChange={(e) => setPassword(e.target.value)}

//         />

//         <br />

 

//         <label>Image</label>

//         <input

//           type="file"

//           name="image"

//           onChange={(e) => setImage(e.target.files[0])}

//         />

//         <br />

 

//         <button type="submit">Submit</button>

//       </form>

//     </div>

//     <div><Footer></Footer></div>

//     </Layout>

//   );

// }