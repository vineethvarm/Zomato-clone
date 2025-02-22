import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import SlideBar from '../components/SlideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {
   const [showLogin, setShowLogin] = useState(false)
   const [showRegister, setShowRegister] = useState(false)
   const [showFirm, setShowFirm] = useState(false)
   const [showProduct, setShowProduct] = useState(false) 

const showLoginHandler = () => {
  setShowLogin(true)
  setShowRegister(false)
  setShowFirm(false)
  setShowProduct(false)
}
const showRegisterHandler = () => {
  setShowRegister(true)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)
}
const showFirmHandler = () => {
  setShowFirm(true)
  setShowRegister(false)
  setShowLogin(false)
  setShowProduct(false)
}
const showProductHandler = () => {
  setShowProduct(true)
  setShowFirm(false)
  setShowRegister(false)
  setShowLogin(false)
}
  return (
    <>
      <section className='landingSection'>
        <Navbar showLoginHandler ={showLoginHandler}  showRegisterHandler ={showRegisterHandler} />
        <div className="cardcontainer">
          <SlideBar showFirmHandler ={showFirmHandler} showProductHandler ={showProductHandler}/>
          {showLogin && <Login />}
          {showRegister && <Register />}
          {showFirm && <AddFirm />}
          {showProduct && <AddProduct />}
        </div>
      </section>
    </>
  )
}

export default LandingPage
