import Link from "next/link";
import React from 'react';

import { AiOutlineShopping } from 'react-icons/ai'

const Navbar =() => {
    return (
      <nav>
        <div className="nav-box">
            <h4 className="logo">KERA KOUTURE</h4>
            <div className="nav-action">
                <button className="cart-icon">
                <AiOutlineShopping />

                </button>
            </div>
        </div>

      </nav>
    )
}

export default Navbar