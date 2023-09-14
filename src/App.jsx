import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const handleAddToCart = cours =>{
    console.log('adding')
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between mx-5 md:mx-10 '>
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
