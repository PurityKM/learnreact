import React from 'react'
//import { Link } from 'react'

const Navbar = () => {
  return (
    <div className='Navigation' style={{
        backgroundColor: "black",
        padding: "2px 2px 0px 2px",
        width: "100%",
        height: "100px"
    }}>
        <h1 style={{
            color: "white",
            fontSize: "40px"
        }}>Hi there 👋,</h1>

        {/* <div className="items" style={{
            color: "white"
        }}>
            <Link to="#">
                Home
            </Link>
        </div> */}
    </div>
  )
}

export default Navbar;
