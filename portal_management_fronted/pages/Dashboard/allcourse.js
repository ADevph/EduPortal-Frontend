import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})

export default function AllCourse() { // Rename the component to AllCourse
    const [courses, setCourses] = useState([]); // Initialize state as an array
    
    useEffect(() => {
        fetchCourses(); // Update the function name
    }, []);
 
    async function fetchCourses() { // Update the function name
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/student/courses"); // Use the correct endpoint
            const coursesData = response.data;
            console.log(coursesData);
            setCourses(coursesData); // Update the state
        } catch (error) {
            console.error(error);
        }
    }

    const renderCourses = () => {
        return (
            <div>
                {courses.map((course) => (
                    <div key={course.cid}>
                        <h2>Course ID: {course.cid}</h2>
                        <h2>Course Name: {course.cname}</h2>
                        {/* Other course details */}
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
    




    return (
        <>
            <Title page="ALL Courses" /> 
            
                <NavBar />
                <div>
                    {renderCourses()} {/* Call the rendering function */}
                </div>



                
    
        </>
    );
}
