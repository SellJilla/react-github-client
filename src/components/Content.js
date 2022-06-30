import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';
import About from './About';

const Content = () => {
  return (
    <Routes>
      <Route index element={<About />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/repositories' element={<About />} />
    </Routes>
  )
}

export default Content