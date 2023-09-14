import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToCart}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 md:gap-4">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    handleAddToCart={handleAddToCart}
                ></Course>)
            }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func.isRequired
}

export default Courses;