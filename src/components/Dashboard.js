import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const key = 'https://block.io/api/v2/get_balance/?api_key=BITCOIN';

    axios.get(`${key}`)
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         })

    return (
        <div>
            <nav>
                <Link>Home</Link>
                <Link>Portfolio</Link>
                <Link>Prices</Link>
                <Link>Rewards</Link>
                <Link>Notifications</Link>
            </nav>
            <div>
                <h1>Hi, Ruth!</h1>
                <p>Ready to buy your first crypto?</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Dashboard;