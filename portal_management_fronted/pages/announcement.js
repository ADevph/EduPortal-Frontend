import React from 'react';
import Layout from "./Layout/layout";
import Title from "./Layout/title";


export default function AnnouncementsPage() {
  return (
    <>
  
    <Title page="About" />
    <Layout>

    <div className='text-3xl text-red-500 mt-8'>
      
      <h2 className='text-center text-4xl text-blue-400 '>Announcements</h2>
      <p className=' text-center text-2xl '>Check out the latest announcements:</p>
    <br/>
    <br/>
      <a className='text-2xl ml-[570px] ' href="https://www.aiub.edu/Files/Uploads/preregistration-instructions-and-guidelines-fst-fall-23-24.pdf" target="_blank" rel="noopener noreferrer">
        Click here to view the announcement
      </a>


    </div>






    <div className=" mt-[500px] ">
          <footer> </footer>{" "}
        </div>
</Layout>
    </>
  );
}

// export default AnnouncementsPage;
