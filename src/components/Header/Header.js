import React from 'react';
import './style.css';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [{ user ,basket }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    } 
    return (
        <div className="header">
            <Link to="/">
            <img className="header-logo" 
            src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" 
            alt="logo" />  
            </Link>  

            <div className="header-search">
                <input 
                className="header-search-input"
                type="text" />
                <AiOutlineSearch
                className="header-search-icon"
                />
            </div>      

            <div className="header-nav">
            <Link to={!user && '/login'}>  
                <div onClick={handleAuthentication} className="header-option">
                    <span className="header-option-l1">
                        Hello {!user?'Guest':user?.email}
                    </span>
                    <span className="header-option-l2">
                    {user?"Sign out":"Sign in"}
                    </span>
                </div>
            </Link>

            {user&& (
                 <div className="header-option" onClick={()=>navigate('/orders')}>
                 <span className="header-option-l1">
                     Returns
                 </span>
                 <span className="header-option-l2">
                     & Orders
                 </span>
             </div>
            )}

               

                <Link to="/checkout">
                <div className="header-option-basket">
                    <BsFillBasketFill/>
                    <span className="header-option-l2 header-basket-count">
                        {basket?.length}
                    </span>
                </div>
                </Link>
            </div>  
        </div>
    );
}

export default Header;
