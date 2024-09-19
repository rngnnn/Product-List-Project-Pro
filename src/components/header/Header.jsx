import React from 'react'
import "./Header.scss"


const Header = ({categories}) => {
    console.log(categories)
  return (
    <div className='header'>
      <h1>Products List</h1>

      <div className='btns' >

        {
            categories.map((a)=>(
                <button key={a} >{a}

                </button>


            ))
        }
      </div>
    </div>
  )
}

export default Header
