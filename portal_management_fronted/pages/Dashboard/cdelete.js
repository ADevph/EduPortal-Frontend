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

export default function DeleteCourse() {
    const [courses, setCourses] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);
 
    async function fetchCourses() {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/student/courses");
            const coursesData = response.data;
            setCourses(coursesData);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDeleteCourse = async () => {
        try {
            await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT + `/student/course/${selectedCourseId}`);
            fetchCourses(); // Refresh the course list after deletion
            setSelectedCourseId(null); // Reset the selected course
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Title page="Delete Course" /> 
            <NavBar />
            <div>
                <h2>Select a course to delete:</h2>
                <select value={selectedCourseId} onChange={(e) => setSelectedCourseId(e.target.value)}>
                    <option value={null}>Select a course</option>
                    {courses.map((course) => (
                        <option key={course.cid} value={course.cid}>{course.cname}</option>
                    ))}
                </select>
                <button onClick={handleDeleteCourse}>Delete Course</button>
            </div>
        </>
    );
}
