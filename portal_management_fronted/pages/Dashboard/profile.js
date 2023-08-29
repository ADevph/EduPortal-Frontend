import Link from "next/link";
import dynamic from 'next/dynamic';
import NavBar from "../Layout/navbar";
import Header2 from "../Layout/header2";
import Footer from "../Layout/footer";

const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
});
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
});

export default function Profile() {

  const containerStyle = {
    backgroundImage: `url('/lib.jpg')`, // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative', // Add this to make sure the image is positioned relative to this container
  };
  return (
    <>
      <Title page="Profile" />
      <Header2 />
      <NavBar />
     
      <div className="text-center">
        
      <div className="text-center mt-8"> {/* Center-align content */}
        
      <br />

      <Link  className="text-yellow-50 text-2xl p-2 border-8 border-blue-400 rounded-lg hover:bg-cyan-500 " href="/Dashboard/allstudent">ALL Student</Link>
        <br />
        <br />
        <br />
 
        <Link  className=" text-yellow-50 text-2xl p-2 border-8 border-blue-400 rounded-lg hover:bg-cyan-500" href="/Dashboard/upstu">Update Student</Link>
        <br />
        <br />
        <br />
       
        <button>
        <Link className=" text-yellow-50 text-2xl p-2 border-8 border-blue-400 rounded-lg hover:bg-cyan-500 " href="/Dashboard/allcourse">
         ALL Courses
        </Link>
        </button>
        <br />
        <br />
        <br />

        <Link className=" mb-10 text-yellow-50 text-2xl p-2 border-8 border-blue-400 rounded-lg hover:bg-cyan-500 " href="/Dashboard/addcourse">
         Add course
        </Link>
        <br />
        <br />
        <br />

        <Link className="mb-10  text-yellow-50 text-2xl p-2 border-8 border-blue-400 rounded-lg hover:bg-cyan-500 " href="/Dashboard/upcourse">
         Update course
        </Link>
        <br />
        <br />
        <br />
       
       
        <Link className=" mb-10  text-yellow-50 p-2 text-2xl border-8 border-blue-400 rounded-lg" href="/Dashboard/cdelete">
          Course Delete
        </Link>
        <br />
       

      



      </div>
         {/* Center-align content */}
         
        {/* <img src="/lib.jpg" alt="img" className="w-80% h-1/2" /> */}
      
        <img src="/lib.jpg" alt="img" className="w-auto h-auto" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', zIndex: -1 }} />
      
       

      </div>
      <div className=" mt-[335px] ">
        <Footer />
      </div>
      <br />
      <br />


      <style jsx>{`
        .button-container {
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
        }
      `
      
      }</style>

    </>
  );
}
