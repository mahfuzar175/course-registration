import PropTypes from 'prop-types';
import doller from '../../assets/image/dollar-sign.svg'
import Frame from '../../assets/image/Frame.svg'
import {ToastContainer} from 'react-toastify';

const Course = ({course, handleAddToCart}) => {
    const {cover_img, course_title, course_details, price, credit} = course;
    return (
        <div className='w-full p-3 bg-white rounded-lg mt-4 md:mt-0'>
            <img src={cover_img} alt={`Cover picture of the title ${course_title}`} />
            <h2 className='text-base font-semibold mt-3 mb-3'>{course_title}</h2>
            <small className='text-sm font-normal text-gray-600'>{course_details}</small>
            <div className='flex justify-between mt-3'>
                <div className='flex items-center'>
                    <img src={doller} alt="" />
                    <p className='text-sm font-normal text-gray-500 ml-1'>Price: {price}</p>
                </div>
                <div className='flex items-center'>
                    <img src={Frame} alt="" />
                    <p className='text-sm font-normal text-gray-500 ml-1'>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(course)} className='bg-[#2F80ED] w-full text-white rounded-md p-2 mt-3'>Select</button>
            <ToastContainer/>
        </div>
        
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired

}

export default Course;