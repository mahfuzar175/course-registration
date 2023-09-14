import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedCourse, setselectedCourse] = useState([])

  const handleAddToCart = (course) =>{
    const isExist = selectedCourse.find(item => item.id == course.id);
    if(isExist){
      toast.error("Already taken!")

    }
    else{
      setselectedCourse([...selectedCourse, course]);
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between mx-5 md:mx-10 '>
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart selectedCourse={selectedCourse}></Cart>
      </div>
    </>
  )
}

export default App
