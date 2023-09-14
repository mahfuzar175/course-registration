import PropTypes from 'prop-types';
import doller from '../../assets/image/dollar-sign.svg'
import Frame from '../../assets/image/Frame.svg'

const Course = ({course}) => {
    const {cover_img, course_title, course_details, price, credit} = course;
    return (
        <div className='w-full p-3 bg-white rounded-lg mt-4 md:mt-0'>
            <img src={cover_img} alt={`Cover picture of the title ${course_title}`} />
            <h2 className='text-lg font-semibold'>{course_title}</h2>
            <small className='text-sm font-normal text-gray-600 mt-2'>{course_details}</small>
            <div className='flex justify-between mt-3'>
                <div className='flex'>
                    <img src={doller} alt="" />
                    <p className='text-sm font-normal text-gray-600 ml-1'>Price:{price}</p>
                </div>
                <div className='flex'>
                    <img src={Frame} alt="" />
                    <p className='text-sm font-normal text-gray-600 ml-1'>{credit}hr</p>
                </div>
            </div>
            <button className='bg-[#2F80ED] w-full text-white rounded-md p-2 mt-3'>Select</button>
        </div>
        
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;