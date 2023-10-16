
import Additem from './Additem';
import './App.css';
import Createcat from './Createcat';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/' element={<><Createcat/></>} />
    <Route path='/createcategory' element={<Createcat/>} />
    <Route path='/addproduct' element={<Additem/>} />
    </Routes>
  );
}

export default App;
