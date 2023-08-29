import { useState, useEffect } from 'react';
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

export default function AllStudent() {
    const [jsonData, setJsonData] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
             const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/student/index",
             { 
             withCredentials: true
                   }
             );
            const jsonData = response.data;
            console.log(jsonData)
            setJsonData(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    const printArray = (jsonData) => {
        return (
            jsonData.map((item, index) => {
                return (

                    <div key={index}>
                        <Link href={"Profile/"+ item.id}>
                        <h3 className='text-ellipsis text-cyan-700'>
                                {item.name}
                                </h3>
                                </Link>
                    </div>
                );

            })
        );
    }

    return (

        <>
 <Title page="ALL Student"> </Title>

  <Header2 />
    <NavBar />
  <h2 className='text-2xl text-cyan-800 text-center'>All Student of your Section listed below :</h2>
           <br />
           <br />
           <div className='text-center '>
           {jsonData != null &&
         
         printArray(jsonData)
 
   }

           </div>
           

            <div className="mt-[200px]">
        <Footer />
      </div>


        </>
    );
}
