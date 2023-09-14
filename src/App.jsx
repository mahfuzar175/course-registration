import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex justify-between mx-5 '>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
