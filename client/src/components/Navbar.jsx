import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "../../images/krinnxb23kgp75s0jyhp.png";
import '../index.css';

const NavbarItem = ({ title, classProps }) => {
  return <Link to={`/${title}`}><li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li></Link>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

   //md:flex-[0.5] flex-initial justify-center items-center
  return (

    <nav className="nav">
      <div className="nav-box">
      <div className="logo" >

        <Link to="/">
          <img src={logo} alt="logo" style={{maxWidth: "70px"}} className="cursor-pointer" />
        </Link>
      </div>

      <ul className="container">
        
        <Link
          to="/crypto"
          className="a"
        >
          Crypto
        </Link>
        <Link
          to="/transact"
          className="a"
        >
          Transaction
        </Link>
        <Link
          to="/token"
          className="a"
        >
          Token
        </Link>
        <Link to="/nft" className='a'>
          NFT
        </Link>
      </ul>
      </div>
      {/*  */}
      <div className="flex-relative my-auto">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={25}
            className="text-white md:hidden cursor-pointer"
            
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-50 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md border-none blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Crypto", "Token", "Transact", "NFT"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
