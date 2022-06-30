import React from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import About from './About';

const Content = () => {
  return (
    <Routes>
      <Route index element={<Navigate to='/repositories' replace={ true } />} />
      <Route path='/about' element={<About />} />
      <Route path='/repositories' element={<div>Repositories</div>} />
    </Routes>
  )
}

export default Content