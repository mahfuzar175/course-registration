import PropTypes from 'prop-types';
import Coursename from '../Coursename/Coursename';
const Cart = ({selectedCourse, remaining, totalCredit, totalPrice}) => {

    return (
        <div className="w-1/3 ml-4 md:ml-10">
            <div className="w-[332px] bg-white rounded-lg p-4">
                <h3 className="text-lg font-bold text-[#2F80ED] mb-4">Credit Hours Remaining: {remaining} hr</h3>
                <hr />
                <h3 className="text-xl font-bold mt-4 mb-4">Course Name</h3>
                <ol className='list-decimal pl-5 mb-4 text-gray-500'>
                {
                    selectedCourse.map((course, index) =><Coursename key={course.id} index={index + 1} selectedCourse={course}></Coursename>)
                }
                </ol>
                <hr />
                <h2 className="font-medium mt-4 mb-4">Total Credit Hours: {totalCredit}</h2>
                <hr />
                <h3 className="font-semibold mt-4">Total Price: {totalPrice} USD</h3>
            </div>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: PropTypes.object.isRequired,
    remaining: PropTypes.object.isRequired,
    totalCredit: PropTypes.object.isRequired,
    totalPrice: PropTypes.object.isRequired    
}

export default Cart;