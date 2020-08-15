import React from 'react';
import {Link} from 'react-router-dom';
import {loggedUser} from '../App'

const HomePage = () => {
    return <div className="homepage">
        <Link className="menu-box" to="/buyhome">
            <img className="menu-img" src="buyhome.png" alt="buy"></img>
            <h2>BUY HOME</h2>
        </Link>
        
            {loggedUser && <Link className="menu-box" to="/sellproduct">
            <img className="menu-img" src="sellhome.jpeg"></img>
            <h2>SELL HOME</h2>
            
        </Link>
}
{!loggedUser && <Link className="menu-box">
            <img className="menu-img" src="sellhome.jpeg"></img>
            <p style={{color:'red'}}>You must be logged in to sell home!</p>
            
        </Link>
}
    </div>;
}



export default HomePage;