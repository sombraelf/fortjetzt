import React from 'react'
import Main from "./Main"
import Header from './Header'
import Footer from "./Footer"


function MainView() {
  return (
    <div className='bg-bgColor-100'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default MainView
