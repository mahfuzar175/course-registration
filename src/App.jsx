import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  const [selectedCourse, setselectedCourse] = useState([])

  const handleAddToCart = (course) =>{
    setselectedCourse([...selectedCourse, course]);
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
