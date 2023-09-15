import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCourse, setselectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleAddToCart = (course) =>{
    const isExist = selectedCourse.find(item => item.id == course.id);
    let count = course.credit;
    let countPrice = course.price;

    if(isExist){
      toast.error("Already taken!")
    }
    else{
      selectedCourse.forEach((item) =>{
      count = count + item.credit;
      countPrice = countPrice + item.price;
    });
    
      const totalRemaining = 20 - count;
      if(count > 20){
        return toast.warning("Yor can't take up to 20 Credit!")
      }
      else{
        setTotalPrice(countPrice);
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setselectedCourse([...selectedCourse, course]);
      }
    }
    
  };

  return (
    <>
      <Header></Header>
      <div className='flex justify-between mx-5 mb-10 md:mx-10'>
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
      </div>
    </>
  )
}

export default App
