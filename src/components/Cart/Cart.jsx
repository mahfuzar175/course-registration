
const Cart = () => {
    return (
        <div className="w-1/3 ml-4 md:ml-10">
            <div className="w-[332px] bg-white rounded-lg p-4">
                <h3 className="text-lg font-bold text-[#2F80ED] mb-4">Credit Hours Remaining: hr</h3>
                <hr />
                <h3 className="text-xl font-bold mt-4 mb-4">Course Name</h3>
                <hr />
                <h2 className="font-medium mt-4 mb-4">Total Credit Hours: </h2>
                <hr />
                <h3 className="font-semibold mt-4">Total Price: </h3>
            </div>
        </div>
    );
};

export default Cart;