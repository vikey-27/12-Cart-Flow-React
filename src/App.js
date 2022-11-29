import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const{loading}=useGlobalContext();
  // console.log(loading)

    if (loading) {
      return (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      )
    }
    // console.log("--------------------")
    // console.log(loading);
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
