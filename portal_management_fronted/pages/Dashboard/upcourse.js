import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic'
import Header2 from '../Layout/header2';
const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})

export default function AllCourse() {
    const [courses, setCourses] = useState([]);

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

    const handleUpdateCourse = async (id, updatedCourseData) => {
        try {
            await axios.put(process.env.NEXT_PUBLIC_API_ENDPOINT + `/student/course/${id}`, updatedCourseData);
            fetchCourses(); // Refresh the course list after updating
        } catch (error) {
            console.error(error);
        }
    };

    const renderCourses = () => {
        return (
            <div className='ml-[50px]'>
                {courses.map((course) => (
                    <div key={course.cid}>
                        <h2>Course ID: {course.cid}</h2>
                        <h2>Course Name: {course.cname}</h2>
                        <h2>Course Time: {course.time}</h2>
                        <div className=''>
                            <input
                                type="text"
                                placeholder="Enter new course name"
                                onChange={(e) => setNewCourseName(e.target.value)}
                            />
                            <br />
                            <br />
                            <input
                                type="text"
                                placeholder="Enter new course time"
                                onChange={(e) => setNewCourseTime(e.target.value)}
                            />
                            <br />
                            <br />
                            <button className='border-8 rounded-lg text-blue-400 ' onClick={() => handleUpdateCourse(course.cid, { cname: newCourseName, time: newCourseTime })}>Update Course</button>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }

    const [newCourseName, setNewCourseName] = useState('');
    const [newCourseTime, setNewCourseTime] = useState('');

    return (
        <>
        <Header2 />
            <Title page="ALL Courses" /> 
            <NavBar />
            <div>
                {renderCourses()}
            </div>
        </>
    );
}
