import React from 'react'

const SlideBar = ({showFirmHandler,showProductHandler}) => {
  return (
    <div className='sideBarcontainer'>
        <ul>
            <li onClick={showFirmHandler}>Firm</li>
            <li onClick={showProductHandler}>Add product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SlideBar
