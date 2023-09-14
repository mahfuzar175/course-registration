
import PropTypes from 'prop-types';

const Coursename = ({selectedCourse}) => {
    const {course_title} = selectedCourse;
    return (
        <li>
            {course_title}
        </li>
    );
};

Coursename.propTypes = {
    selectedCourse: PropTypes.object.isRequired,
}


export default Coursename;