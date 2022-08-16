import React, {useState} from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='Navbar'>
            <div className="icon ">
                <img src="IMG/Capture 1.png" alt="" className='w-32 absolute' />
                <div className="text relative pt-4 pl-24">
                    <h1 className='uppercase text-3xl font-bold font-mono A1'>A.E.D</h1>
                    <h1 className='uppercase text-sm font-bold text-black -ml-8'>AFRICAN SALON & Cosmetics</h1>
                </div>
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to="/" className='A1 Link'>Home</Link>
                <Link to="/" className='A1 Link'>About</Link>
                <Link to="/" className='A1 Link'>Contact Us</Link>
                <Link to="/" className='A1 Link'>Services</Link>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}  onClick={() => setIsOpen(!isOpen)} >
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar
