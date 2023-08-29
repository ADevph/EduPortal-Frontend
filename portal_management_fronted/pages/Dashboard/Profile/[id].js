import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// import NavBar from "../Layout/navbar";
const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})

export default function AllStudent() {
    const [jsonData, setJsonData] = useState(null);
    const router=useRouter();
    const  id = router.query.id;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
   
        try {
             const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/student/search/"+id,
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

    const printObject = (jsonData) => {
        return (
            <div>
              
                <img src={process.env.NEXT_PUBLIC_API_ENDPOINT + '/student/getfile/' + jsonData.filenames} />
                <h2>id: {jsonData.id}</h2>
                <h2>name: {jsonData.name}</h2>
                <h2>email: {jsonData.email}</h2>

            </div>
        );
    }

    return (

        <>
  <Title page="ALL Student"> </Title>
  <Layout>
    <NavBar/>
            {jsonData != null &&
                printObject(jsonData)
            }
</Layout>
        </>
    );
}
